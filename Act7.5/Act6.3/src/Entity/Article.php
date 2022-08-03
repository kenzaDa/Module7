<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation as Serializer;

use Doctrine\ORM\Mapping as ORM;



/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *  @Serializer\Groups({"articles"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"articles"})
     */
    private $titre;

    /**
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"articles"})
     */
    private $contenu;

    /**
     * @ORM\Column(type="string", length=255)
     *  @Serializer\Groups({"articles"})
     */
    private $auteur;

    /**
     * @ORM\Column(type="datetime")
     * @Serializer\Groups({"articles"})
     */
    private $date_de_publication;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    public function setContenu(string $contenu): self
    {
        $this->contenu = $contenu;

        return $this;
    }

    public function getAuteur(): ?string
    {
        return $this->auteur;
    }

    public function setAuteur(string $auteur): self
    {
        $this->auteur = $auteur;

        return $this;
    }

    public function getDateDePublication(): ?\DateTimeInterface
    {
        return $this->date_de_publication;
    }

    public function setDateDePublication(\DateTimeInterface $date_de_publication): self
    {
        $this->date_de_publication = $date_de_publication;

        return $this;
    }
}
