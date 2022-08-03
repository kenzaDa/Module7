<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;


class AppFixtures extends Fixture

{   public function __construct(){

}
    public function load(ObjectManager $manager): void
    {
      
       
    
     $Table=[
        [   "title"=> "RENCONTRE AVEC SARA LUQUE VENZALÁ ",
        "auteur"=> "auteur 1",
            "content"=> "Dans ce témoignage, Sara Luque, IT Talent attraction & Business Development Specialist chez Talan en Espagne, nous raconte son expérience à la Talan Talent Attraction and Business Development Academy située dans le Centre d'excellence de Malaga. ",
            "date"=>'11-07-2022'
        ],
        [  "title"=> "TALAN MEMBRE DE LA FNFE ",
        "auteur"=> "auteur 2 ",
            "content"=> "En mai 2022, Talan est devenu membre du Forum National de la Ftabration Électronique et des marchés publiques (FNFE - MPE). ",
            "date"=>'08-07-2022'
        ],
            [   "title"=> "MÉTAVERS : L’IMMERSIF AU SERVICE D’UNE NOUVELLE EXPÉRIENCE POUR LES CLIENTS ",
            "auteur"=> " auteur 3",
            "content"=> "Les principes de l’immersif portés par le métavers, ne se limitent pas au full-virtuel, de même que le digital ne se réduit pas au full digital. Il s’agit plutôt d’une tendance lourde qui consiste à mêler à différents degrés, réalité et virtuel, pour venir considérablement ouvrir l’éventail des possibilités dont les marques disposent pour enrichir les expériences qu’elles proposent à leurs clients. ",
                "date"=>'08-07-2022'
        ],
            [   "title"=> "AVEC L’UNIVERSITÉ DE BORDEAUX, TALAN FAIT CONFIANCE À L’INTELLIGENCE ARTIFICIELLE ",
            "auteur"=> "auteur 4 ",
            "content"=> "Pouvoir expliquer et comprendre des systèmes automatiques de prises de décision sont des composantes essentielles de la confiance dans de tels outils. L’Intelligence Artificielle, utilisée dans de tels modèles, doit ainsi être en mesure de donner des clés sur le cheminement de son apprentissage ou du raisonnement mis en œuvre. ",
            "date"=>'07-07-2022'
        ],
            [   "title"=> " TALAN MET L’IA AU CŒUR DE L’APPLICATION RECOVUP POUR MIEUX GUÉRIR LES TMS",
            "auteur"=> " auteur 5",
            "content"=> " La startup Skeewai, co-fondée notamment par le Dr Mehdi Roudesli, médecin spécialisé en médecine sportive et Nicolas Ducrocq, kinésithérapeute, a mis au point Recovup, une solution destinée à prévenir les troubles muscolo-squelettiques (TMS) et à faciliter l’auto-rééeducation",
            "date"=>'06-07-2022'
        ],
            [   "title"=> " STRATÉGIE RSE : OUTILLEZ-VOUS POUR AVOIR UN IMPACT RÉEL !",
            "auteur"=> "auteur 6 ",
            "content"=> " Un webinar en partenariat avec Board a eu lieu le 16 juin. Le replay est disponible !",
            "date"=>'04-07-2022'
        ],
            [   "title"=> "LE MÉTAVERS, NOUVEAU CANAL ? ",
            "auteur"=> "auteur 7",

            "content"=> "Le métavers vient percuter l’ensemble des dimensions de l’activité et du fonctionnement des entreprises : il se révèle notamment un formidable terrain de jeu pour le marketing. ",
            "date"=>'01-07-2022'
        ],
            [   "title"=> "ECOCODE CHALLENGE, TALAN RELÈVE LE DÉFI ! ",
            "auteur"=> "auteur 8",
            "content"=> " Le 2 et 3 Juin dernier, à l’initiative du Groupe Crédit Agricole, a eu lieu un hackathon d’un nouveau type « L’ecoCode Challenge ».",
            "date"=>'30-06-2022'
        ],
            [   "title"=> "RENCONTREZ BHAGYASHREE \"SHREE\" CHOUHAN ",
            "auteur"=> "auteur 9",
            "content"=> "Dans ce témoignage, Bhagyashree \"Shree\" Chouhan nous raconte son expérience en tant que \"Business Analyst\" chez Talan au Canada. ",
            "date"=>'29-06-2022'
        ],
            [   "title"=> " INTERVIEW DE JONATHAN SAMARAS, DIRECTEUR GÉNÉRAL BELUX, PARTENAIRE DU GROUPE TALAN",
            "auteur"=> "auteur 10",
            "content"=> "Le Groupe Talan a annoncé le lancement de nouvelles opération en Belgique en Janvier 2022 Six mois plus tard, nous nous entretenons avec Jonathan Samaras qui a pris en charge ce projet d'expansion en Belgique. ",
            "date"=>'27-06-2022'
        ],
            [   "title"=> " RENCONTRE AVEC GUILLAUME CAMBEFORT, SALES CONSULTANT CHEZ TALAN EN ESPAGNE",
            "auteur"=> "auteur 11",
            "content"=> "Guillaume Cambefort a rejoint Talant en janvier 2022. Dans ce témoignage, Guillaume nous raconte son expérience au sein de la Talan Talent Attraction and Business Development Academy située dans le centre d'excellence de Malaga. ",
            "date"=>'24-06-2022'
        ],
            [   "title"=> "CÉCILE PETIT, GESTIONNAIRE DE PROJET CHEZ CREATECH : « JE N’AI PAS ÉTÉ DÉTERMINÉE PAR MES DIPLÔMES MAIS PAR MES COMPÉTENCES ET MA CAPACITÉ À APPRENDRE » ",
            "auteur"=> "auteur 12",
            "content"=> "Basée à Montréal, Cécile Petit vient de fêter ses 4 ans chez Createch et son 20e anniversaire sur le territoire canadien. Après avoir vécu un projet d’implantation ERP côté client, cette Franco-Canadienne a su faire sa place dans un univers plutôt masculin en tant que conseillère fonctionnelle au sein de l’équipe Microsoft chez Createch puis gestionnaire de projets. Au fil des années, elle a développé ses compétences techniques tout en cultivant son approche personnelle d’accompagnement des clients tournée vers l’humain. ",
            "date"=>'23-06-2022'
        ],
            [   "title"=> " LE MÉTAVERS VU DES ENTREPRISES : 3 TEMPS POUR L’APPRÉHENDER",
            "auteur"=> "auteur 13",
            "content"=> "Depuis quelques mois, le Métavers est devenu le buzzword de tous les médias et des milieux économiques. Face à ce brouhaha dans lequel il est bien difficile de se retrouver, les dirigeants d’entreprises se posent de nombreuses questions ",
            "date"=>'22-06-2022'
        ],
            [   "title"=> "LE RÈGLEMENT DISCLOSURE - SFDR ",
            "auteur"=> "auteur 14",
            "content"=> "Quels en sont les principaux enjeux et impacts opérationnels pour les acteurs de l’assurance concernés ? Découvrez l'analyse de Vincent Meslin, Partner et Sofia Ouahbi, Consultante Senior chez Talan Consulting ",
            "date"=>'20-06-2022'
        ],
            [   "title"=> "CÉCILE LAFON, PARTNER CHEZ TALAN CONSULTING : « LA RELÈVE DES ASSOCIÉS DU MONDE DU CONSEIL EST DÉJÀ LÀ, ET ELLE SERA FÉMININE ! » ",
            "auteur"=> "auteur 15",
            "content"=> "Cécile Lafon est partner chez Talan Consulting. Spécialiste de la finance de marché et du conseil en performance durable, elle s’investit aujourd’hui dans tout ce qui touche à l’humain : RSE, écologie, RH. Ayant évolué toute sa carrière dans un environnement à dominante masculine, elle défend aujourd’hui un modèle de leadership au féminin. ",
            "date"=>'15-06-2022'
        ],
            [   "title"=> " LE MANAGEMENT DÉCENTRALISÉ EN ASSURANCE",
            "auteur"=> "auteur 16",
            "content"=> " D’une méthode de résilience au COVID à un levier de pérennité pour l’entreprise.",
            "date"=>'14-06-2022'
        ],
            [   "title"=> " L'INTERVIEW COLLAB' : BERTRAND NAU, TECHNICAL LEAD CHEZ TALAN LABS",
            "auteur"=> "auteur 17",
            "content"=> "Bertrand Nau est Technical Lead chez Talan Labs. Découvrez son témoignage vidéo sur sa carrière, son métier et sur son parcours dans l’entreprise ",
            "date"=>'09-06-2022'
        ],
    ];
    foreach ($Table as $tab){
            $article =new Article();
            $article->setTitre( $tab["title"])
                 ->setAuteur( $tab["auteur"])
                ->setContenu( $tab["content"])
                ->setDateDePublication(new \DateTime());
            $manager->persist($article); 
    }
        $manager->flush();
        }
        public function getDependencies()
        {
            return array(
               tab::class,
            );
    }
    }
    

