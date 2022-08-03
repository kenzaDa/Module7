<?php

namespace App\Controller\api;

use App\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Put;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\Annotations as Rest;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use JMS\Serializer\SerializationContext;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;






class ApiArticleController extends AbstractController
{
      /**
     * @View(serializerGroups={"articles"})
     * @Get("/articles")
     * @param ArticleRepository $articleRepository
     * @return Article[]
     */

    public function getAll(ArticleRepository $articleRepository)
    {
       return $articleRepository->findAll();
    } 

   //  autre methode
  /**
     ** @Get("/article")
     */
    public function listAction(ArticleRepository $articlesRepo)
    {
    $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
    $articles = $articlesRepo->findAll();
    $serializer = new Serializer(array(new DateTimeNormalizer('d.m.Y'), new GetSetMethodNormalizer($classMetadataFactory)), array('json' => new JsonEncoder()));
    $data = $serializer->serialize($articles, 'json',['groups'=>'articles']);
       // On instancie la réponse
    $response = new Response($data);

       // On ajoute l'entête HTTP
    $response->headers->set('Content-Type', 'application/json');
   //   $response=$this->json($articles,200,[],['groups'=>'articles']);
       // On envoie la réponse
       return $response;
  }


/**
     *@Get(
     *     path = "/api/article/{id}",
     *     name = "app_article_show",
     *     requirements = {"id"="\d+"}
     * )
     * @View(serializerGroups={"articles"})
     */
public function getArticle(Article $articles, ArticleRepository $articlesRepo,$id)
{   

    $articles = $articlesRepo
    ->find($id);
    
       return $articles;
}


/**
 * @View(statusCode = 201, serializerGroups={"articles"})
 * @POST("/api/article", name="ajouter")
 */
public function addArticle(Request $request, SerializerInterface $serializer,EntityManagerInterface $em)
{
    $jsonRecu=$request->getContent();
    $article=$serializer->deserialize($jsonRecu, Article::class,'json');
    $em->persist($article);
    $em->flush();
    return $this->json($article,201,[]);
}

  /**

     *@Put("/api/article/{id?}", name="edit")

     */ 

    public function editArticle(?Article $article, Request $request)

    {

            $donnees = json_decode($request->getContent());

            $code = 200;

            if(!$article){

                $article = new Article();

                $code = 201;

            }

            $article->setTitre($donnees->titre);

            $article->setContenu($donnees->contenu);

            $article->setAuteur($donnees->auteur);

            $article->setDateDePublication (new \DateTime((string)$donnees->dateDePublication));

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($article);

            $entityManager->flush();

           return $this->json($article,$code,[]);

    }
  /**
     * @View(serializerGroups={"articles"})
     * @GET("/api/lastarticle", name="article_list_three")
     */
    public function lastArticles(ArticleRepository $articlesRepo)
    {

    $articles = $articlesRepo->apiFindAll();

       return $articles;
  }
     

  /**
 *@DELETE("/api/article/{id}", name="supprime")
 */
public function removeArticle(ArticleRepository $articleRepository,EntityManagerInterface $em,$id):Response
{
  $article = $articleRepository->find($id);
  if(!$article){
      return $this->json(["error message" => "article introuvable"],404);
  }
  $em->remove($article);
  $em->flush();
  return $this->json(["message" => "article supprime avec succès"]);
}}

