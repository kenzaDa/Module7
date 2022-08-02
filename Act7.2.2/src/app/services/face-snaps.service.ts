import { Injectable } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
 
  faceSnaps: FaceSnap[] = [
    {id:1,
        title: 'Guerre en Ukraine, en direct : Kiev dément avoir bombardé une prison en territoire séparatiste',
        description: 'Le ministère des armées français a passé commande de dix-huit canons Caesar pour remplacer les dix-huit exemplaires donnés à l’Ukraine, qui ont amputé de près d’un quart le stock de l’armée française, a annoncé vendredi l’industriel Nexter. Paris souhaite, en effet, que l’industrie de défense soit en mesure d’augmenter rapidement ses cadences et capacités de production pour répondre à la situation créée par l’invasion russe de l’Ukraine.',
        imageUrl: 'https://th.bing.com/th/id/OIF.6gJK4vMv9Bx9V8Nwhpy6KA?pid=ImgDet&rs=1',
        createdDate: new Date("2022-05-27"),
        author:"Christo Grozev",
        comment:[{ content:"article interressant ",author:'hbib'}, { content:"Bien ! ",author:'emna'}]
      
      },
      { id:2,
        title: 'Tour de France Femmes : la chute, ce roman toujours au programme',
        description: 'Déjà la plus véloce sur les Champs-Elysée dimanche, la Néerlandaise a entendu dans son dos ce  grand bruit , celui de cette chute survenue au milieu de peloton. On dit qu’on tombe quand on est mal placée, aujourd’hui c’est bien la preuve que pas toujours, constate Sandra Lévénez Comme un bon tiers des coureuses, la Française de la formation Cofidis a participé, malgré elle, à l’édification d’une cathédrale en carbone de vélos entassés. « Je me relève et ça me rentre derrière. Mais pas de bobo, juste le matériel à remettre en état », poursuit la doyenne de la course (43 ans).',
        imageUrl: 'https://img.lemde.fr/2022/07/28/0/0/2234/1490/664/0/75/0/8bacf87_5818695-01-06.jpg',
        createdDate: new Date("2014-07-14"),
        author:"Alexandre Pedro",
        comment:[{ content:"article interressant ",author:'hbib'}, { content:"Bien ! ",author:'emna'}]
      ,
      },
      { id:3,
        title: 'Plus de vingt ans qu’Ariol a 9 ans',
        description: 'Pendant combien de temps peut-on avoir 9 ans ? Voilà plus de deux décennies qu’Ariol, le petit âne bleu inventé par Emmanuel Guibert, dessiné par Marc Boutavant, est coincé dans son année de CM1. Enfin, non, pas coincé. Rien n’est plus étranger que l’idée de fermeture ou de sur-place à l’univers de ce personnage sensible et imaginatif, entouré de ses parents, grands-parents, camarades de classe – son inséparable copain, le cochon Ramono ; Petula, la vachette à laquelle il voue un amour à sens unique…',
        imageUrl: 'https://img.lemde.fr/2022/07/18/0/0/3018/3155/664/0/75/0/a4fd26e_1658140030337-sans-titre-1.jpg',
        createdDate: new Date("2010-12-02"),
        author:"Stéphane Davet",
        comment:[{ content:"article interressant ",author:'hbib'}, { content:"Bien ! ",author:'emna'}]
      
      },
      {id:4,
        title: 'Amazon remonte les prix de son abonnement Prime en France de 43 % par an et de 17 % par mois',
        description: 'Interrogée sur le détail des hausses de dépenses, l’entreprise invoque en premier lieu l’inflation des « coûts du carburant » des livraisons et aussi celle des « prix des emballages » des colis, même si Amazon assure faire des efforts pour réduire le poids et le volume de ceux-ci au minimum. La plate-forme de vente en ligne avait déjà invoqué fin avril les prix de l’essence pour justifier la remontée de 4 % à 5 % de ses tarifs facturés aux vendeurs utilisant ses services logistiques.',
        imageUrl: 'https://cdn.kulturegeek.fr/wp-content/uploads/2020/12/Amazon-Logo-Depot-Centre-Distribution.jpg',
        createdDate: new Date("2019-02-10"),
        author:"Alexandre Piquard",
        comment:[{ content:"article interressant ",author:'hbib'}, { content:"Bien ! ",author:'emna'}]
      
      
      },
      { id:5,
        title: 'Des trains pas comme les autres',
        description: 'Si un rêve n’a pas de prix, ces conditions de transport rudimentaires offrent un atout de poids en période d’inquiétude sur le pouvoir d’achat : « Traverser la Sibérie pour le prix d’un Paris-Lyon. » Encore faut-il accepter de partir de nuit, depuis un quai à peine ébauché au milieu des voies, peu éclairé et par − 20 ⁰C. « Cela ne fait pas très départ en vacances », admet le gentleman voyageur avant de monter dans le Moscou-Tchita, qui doit le mener au milieu de la Sibérie.',
        imageUrl: 'https://th.bing.com/th/id/OIP.KTj3Hocs3549hwOMOxj_HQHaE8?pid=ImgDet&rs=1',
        createdDate: new Date("2018-03-30"),
        author:"Catherine Pacary",
        comment:[{ content:"article interressant ",author:'hbib'}, { content:"Bien ! ",author:'emna'}]
      
      },
      { id:6,
        title: 'Carte postale culinaire du Portugal : le tartare fruité de Marc Lorés Panadés',
        description: 'Le restaurant gastronomique du complexe hôtelier, le Vale d’Abraão, est au diapason. Le chef Marc Lorés Panadés, d’origine catalane, n’a certes pas lésiné en début de carrière sur son empreinte carbone… Après avoir brillé dans quelques tables espagnoles prestigieuses (dont El Bulli), il n’a cessé de jouer à saute-frontière pour passer de fourneaux en fourneaux en Autriche, au Royaume-Uni, au Danemark, en Allemagne, à Hongkong ou Bali.Quand il n’est pas en cuisine, le chef, grand sportif, pratique souvent la course à pied avec les clients, dans les chemins qui slaloment entre les vignes. Il nous propose un tartare « sain » qui se passe de bœuf mais met à l’honneur les fruits et légumes de saison.',
        imageUrl: 'https://img.lemde.fr/2022/06/15/0/0/960/1280/664/0/75/0/4cb2841_1655304947880-carrot-tartar.jpg',
        createdDate: new Date("2020-06-19"),
        author:"Marc Lorés Panadés",
        comment:[{ content:"article interressant ",author:'hbib'}, { content:"Bien ! ",author:'emna'}]
      
      }
  ];



  getAllFaceSnaps(): any {
   
    this.faceSnaps.sort((a,b)=> {

    return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()

    });
    return this.faceSnaps;
    
}

  

getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }


  addFaceSnap(formValue: { title: string, description: string, imageUrl: string , createdDate : Date , author:string}) {
    const faceSnap: FaceSnap = {
        ...formValue,
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
}


addComment(formValue: { content: string , author: string } ,faceSnapId: number){
  
  const faceSnapcomment = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)!.comment
  let newComment :any
  = { 
    ...formValue,
 };
console.log((faceSnapcomment)) 
 console.log(newComment)
newComment.push(faceSnapcomment);
}

}

