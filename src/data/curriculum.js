/**
 * ROUTE A1: FRENCH - COMPLETE CURRICULUM DATA
 * 
 * This file contains the structured curriculum for all A1 levels (A1.1 - A1.10).
 * 
 * Structure:
 * - Each unit corresponds to one A1 level
 * - Each unit has vocabulary (for learning) and drills (for practice)
 * - Vocabulary items can be used in multiple drills
 */

export const CURRICULUM = [
  // ============ A1.1: De Eerste Ontmoeting ============
  {
    id: 'a1_u01',
    title: 'De Eerste Ontmoeting',
    description: 'Leer groeten, jezelf voorstellen en afscheid nemen.',
    level: 'A1.1',
    vocabulary: [
      { id: 'v1-1', fr: 'Bonjour', nl: 'Hallo / Goedendag', context_fr: 'Bonjour, comment ça va?' },
      { id: 'v1-2', fr: "Je m'appelle", nl: 'Ik heet', context_fr: 'Je m\'appelle Thomas.' },
      { id: 'v1-3', fr: 'Ça va bien', nl: 'Het gaat goed', context_fr: 'Oui, ça va bien, merci.' },
      { id: 'v1-4', fr: 'Enchanté', nl: 'Aangenaam', context_fr: 'Enchanté, je suis Marie.' },
      { id: 'v1-5', fr: 'Au revoir', nl: 'Tot ziens', context_fr: 'Au revoir et à bientôt!' },
      { id: 'v1-6', fr: 'Merci', nl: 'Dank je wel', context_fr: 'Merci beaucoup!' },
      { id: 'v1-7', fr: 'S\'il vous plaît', nl: 'Alstublieft', context_fr: 'Un café, s\'il vous plaît.' },
      { id: 'v1-8', fr: 'Oui', nl: 'Ja', context_fr: 'Oui, je suis Français.' },
      { id: 'v1-9', fr: 'Non', nl: 'Nee', context_fr: 'Non, je ne suis pas belge.' },
      { id: 'v1-10', fr: 'Excusez-moi', nl: 'Excuseer me', context_fr: 'Excusez-moi, où sont les toilettes?' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Hallo"?',
        options: ['Bonjour', 'Au revoir', 'Merci'],
        correct_answer: 'Bonjour'
      },
      {
        type: 'multiple_choice',
        question: "Welk woord betekent 'Tot ziens'?",
        options: ['Bonjour', 'Au revoir', 'Enchanté'],
        correct_answer: 'Au revoir'
      },
      {
        type: 'multiple_choice',
        question: 'Wat zeg je als je iemand ontmoet?',
        options: ['Au revoir', 'Enchanté', 'Au bientôt'],
        correct_answer: 'Enchanté'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Bonjour, je m\'appelle [jouw naam]"',
        target_words: ['bonjour', 'appelle']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Ça va bien, merci"',
        target_words: ['ça', 'bien', 'merci']
      }
    ]
  },

  // ============ A1.2: Familie en Vrienden ============
  {
    id: 'a1_u02',
    title: 'Familie en Vrienden',
    description: 'Leer familieleden en relaties beschrijven.',
    level: 'A1.2',
    vocabulary: [
      { id: 'v2-1', fr: 'Mère', nl: 'Moeder', context_fr: 'Ma mère s\'appelle Anne.' },
      { id: 'v2-2', fr: 'Père', nl: 'Vader', context_fr: 'Mon père est ingénieur.' },
      { id: 'v2-3', fr: 'Frère', nl: 'Broer', context_fr: 'J\'ai un frère et une sœur.' },
      { id: 'v2-4', fr: 'Sœur', nl: 'Zus', context_fr: 'Ma sœur a 16 ans.' },
      { id: 'v2-5', fr: 'Ami', nl: 'Vriend', context_fr: 'Mon ami est très gentil.' },
      { id: 'v2-6', fr: 'Amie', nl: 'Vriendin', context_fr: 'Je suis amie avec Marie.' },
      { id: 'v2-7', fr: 'Enfant', nl: 'Kind', context_fr: 'Ils ont trois enfants.' },
      { id: 'v2-8', fr: 'Garçon', nl: 'Jongen', context_fr: 'Mon fils est un garçon de 10 ans.' },
      { id: 'v2-9', fr: 'Fille', nl: 'Meisje', context_fr: 'Sa fille a 8 ans.' },
      { id: 'v2-10', fr: 'Grand-mère', nl: 'Grootmoeder', context_fr: 'Ma grand-mère habite à Paris.' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Welk woord betekent "Vader"?',
        options: ['Mère', 'Père', 'Frère'],
        correct_answer: 'Père'
      },
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Zus"?',
        options: ['Sœur', 'Frère', 'Mère'],
        correct_answer: 'Sœur'
      },
      {
        type: 'multiple_choice',
        question: 'Wat is het woord voor "Vriend"?',
        options: ['Ami', 'Mère', 'Enfant'],
        correct_answer: 'Ami'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "J\'ai un frère"',
        target_words: ['ai', 'frère']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Ma mère s\'appelle..."',
        target_words: ['mère', 'appelle']
      }
    ]
  },

  // ============ A1.3: Eten en Drinken ============
  {
    id: 'a1_u03',
    title: 'Eten en Drinken',
    description: 'Leer voedsel en drank vocabulaire.',
    level: 'A1.3',
    vocabulary: [
      { id: 'v3-1', fr: 'Pain', nl: 'Brood', context_fr: 'Un morceau de pain, s\'il vous plaît.' },
      { id: 'v3-2', fr: 'Fromage', nl: 'Kaas', context_fr: 'J\'aime le fromage français.' },
      { id: 'v3-3', fr: 'Café', nl: 'Koffie', context_fr: 'Un café, s\'il vous plaît.' },
      { id: 'v3-4', fr: 'Eau', nl: 'Water', context_fr: 'Un verre d\'eau, s\'il vous plaît.' },
      { id: 'v3-5', fr: 'Vin', nl: 'Wijn', context_fr: 'Un verre de vin rouge, s\'il vous plaît.' },
      { id: 'v3-6', fr: 'Poisson', nl: 'Vis', context_fr: 'Je préfère le poisson au poulet.' },
      { id: 'v3-7', fr: 'Pomme', nl: 'Appel', context_fr: 'Une pomme rouge, s\'il vous plaît.' },
      { id: 'v3-8', fr: 'Beurre', nl: 'Boter', context_fr: 'Du beurre sur le pain, s\'il vous plaît.' },
      { id: 'v3-9', fr: 'Lait', nl: 'Melk', context_fr: 'Un verre de lait froid.' },
      { id: 'v3-10', fr: 'Sucre', nl: 'Suiker', context_fr: 'Un peu de sucre dans mon café.' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Pain"?',
        options: ['Brood', 'Kaas', 'Vlees'],
        correct_answer: 'Brood'
      },
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Koffie"?',
        options: ['Café', 'Vin', 'Eau'],
        correct_answer: 'Café'
      },
      {
        type: 'multiple_choice',
        question: 'Welk woord betekent "Water"?',
        options: ['Eau', 'Lait', 'Vin'],
        correct_answer: 'Eau'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Un café, s\'il vous plaît"',
        target_words: ['café', 'plaît']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "J\'aime le pain"',
        target_words: ['aime', 'pain']
      }
    ]
  },

  // ============ A1.4: Winkelen ============
  {
    id: 'a1_u04',
    title: 'Winkelen',
    description: 'Leer winkelen en geld gerelateerde woorden.',
    level: 'A1.4',
    vocabulary: [
      { id: 'v4-1', fr: 'Magasin', nl: 'Winkel', context_fr: 'Le magasin est ouvert le samedi.' },
      { id: 'v4-2', fr: 'Prix', nl: 'Prijs', context_fr: 'Quel est le prix de ce livre?' },
      { id: 'v4-3', fr: 'Argent', nl: 'Geld', context_fr: 'J\'ai besoin d\'argent pour acheter des vêtements.' },
      { id: 'v4-4', fr: 'Euro', nl: 'Euro', context_fr: 'Cela coûte 50 euros.' },
      { id: 'v4-5', fr: 'Acheter', nl: 'Kopen', context_fr: 'Je veux acheter une nouvelle chemise.' },
      { id: 'v4-6', fr: 'Vendre', nl: 'Verkopen', context_fr: 'Le magasin vend des livres.' },
      { id: 'v4-7', fr: 'Panier', nl: 'Mand', context_fr: 'Mettez les produits dans le panier.' },
      { id: 'v4-8', fr: 'Caisse', nl: 'Kassa', context_fr: 'Allez à la caisse pour payer.' },
      { id: 'v4-9', fr: 'Carte bancaire', nl: 'Bankkaart', context_fr: 'Je paie avec ma carte bancaire.' },
      { id: 'v4-10', fr: 'Facture', nl: 'Factuur', context_fr: 'Pouvez-vous me donner la facture?' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Winkel"?',
        options: ['Magasin', 'Prix', 'Argent'],
        correct_answer: 'Magasin'
      },
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Acheter"?',
        options: ['Verkopen', 'Kopen', 'Betalen'],
        correct_answer: 'Kopen'
      },
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Geld"?',
        options: ['Prix', 'Argent', 'Euro'],
        correct_answer: 'Argent'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Combien ça coûte?"',
        target_words: ['combien', 'coûte']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Je veux acheter..."',
        target_words: ['veux', 'acheter']
      }
    ]
  },

  // ============ A1.5: Reizen ============
  {
    id: 'a1_u05',
    title: 'Reizen',
    description: 'Leer reizen en vervoer gerelateerde woorden.',
    level: 'A1.5',
    vocabulary: [
      { id: 'v5-1', fr: 'Train', nl: 'Trein', context_fr: 'Je vais à Paris en train.' },
      { id: 'v5-2', fr: 'Gare', nl: 'Station', context_fr: 'La gare est près du centre-ville.' },
      { id: 'v5-3', fr: 'Billet', nl: 'Kaartje', context_fr: 'Où achète-t-on les billets?' },
      { id: 'v5-4', fr: 'Voiture', nl: 'Auto', context_fr: 'Je voyage en voiture.' },
      { id: 'v5-5', fr: 'Avion', nl: 'Vliegtuig', context_fr: 'Je prends l\'avion pour Amsterdam.' },
      { id: 'v5-6', fr: 'Hôtel', nl: 'Hotel', context_fr: 'Je cherche un hôtel pas cher.' },
      { id: 'v5-7', fr: 'Chambre', nl: 'Kamer', context_fr: 'Une chambre pour deux personnes.' },
      { id: 'v5-8', fr: 'Bagage', nl: 'Bagage', context_fr: 'Où puis-je mettre mes bagages?' },
      { id: 'v5-9', fr: 'Voyage', nl: 'Reis', context_fr: 'J\'aime les voyages.' },
      { id: 'v5-10', fr: 'Arriver', nl: 'Aankomen', context_fr: 'Quand arrive-t-on à Paris?' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Train"?',
        options: ['Voiture', 'Trein', 'Avion'],
        correct_answer: 'Trein'
      },
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Hotel"?',
        options: ['Gare', 'Hôtel', 'Chambre'],
        correct_answer: 'Hôtel'
      },
      {
        type: 'multiple_choice',
        question: 'Wat is het woord voor "Kaartje"?',
        options: ['Billet', 'Voyage', 'Bagage'],
        correct_answer: 'Billet'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Je vais à... en train"',
        target_words: ['vais', 'train']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Une chambre pour deux personnes"',
        target_words: ['chambre', 'deux', 'personnes']
      }
    ]
  },

  // ============ A1.6: Werken ============
  {
    id: 'a1_u06',
    title: 'Werken',
    description: 'Leer beroepen en werkgerelateerde vocabulaire.',
    level: 'A1.6',
    vocabulary: [
      { id: 'v6-1', fr: 'Travail', nl: 'Werk', context_fr: 'J\'aime mon travail.' },
      { id: 'v6-2', fr: 'Profession', nl: 'Beroep', context_fr: 'Quelle est votre profession?' },
      { id: 'v6-3', fr: 'Docteur', nl: 'Dokter', context_fr: 'Mon père est docteur.' },
      { id: 'v6-4', fr: 'Professeur', nl: 'Leraar', context_fr: 'Elle est professeur de français.' },
      { id: 'v6-5', fr: 'Infirmière', nl: 'Verpleegster', context_fr: 'Elle travaille comme infirmière.' },
      { id: 'v6-6', fr: 'Ingénieur', nl: 'Ingenieur', context_fr: 'Il est ingénieur en informatique.' },
      { id: 'v6-7', fr: 'Artiste', nl: 'Kunstenaar', context_fr: 'Je suis artiste.' },
      { id: 'v6-8', fr: 'Employé', nl: 'Werknemer', context_fr: 'Je suis employé dans une grande entreprise.' },
      { id: 'v6-9', fr: 'Bureau', nl: 'Kantoor', context_fr: 'Je travaille au bureau.' },
      { id: 'v6-10', fr: 'Salaire', nl: 'Salaris', context_fr: 'Mon salaire est bon.' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Dokter"?',
        options: ['Professeur', 'Docteur', 'Ingénieur'],
        correct_answer: 'Docteur'
      },
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Profession"?',
        options: ['Werk', 'Beroep', 'Bureau'],
        correct_answer: 'Beroep'
      },
      {
        type: 'multiple_choice',
        question: 'Welk woord betekent "Kantoor"?',
        options: ['Bureau', 'Travail', 'Salaire'],
        correct_answer: 'Bureau'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Je suis..." en voeg je beroep toe',
        target_words: ['suis']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Je travaille au bureau"',
        target_words: ['travaille', 'bureau']
      }
    ]
  },

  // ============ A1.7: Gezondheid ============
  {
    id: 'a1_u07',
    title: 'Gezondheid',
    description: 'Leer gezondheid en medische vocabulaire.',
    level: 'A1.7',
    vocabulary: [
      { id: 'v7-1', fr: 'Santé', nl: 'Gezondheid', context_fr: 'La santé est importante.' },
      { id: 'v7-2', fr: 'Malade', nl: 'Ziek', context_fr: 'Je suis malade.' },
      { id: 'v7-3', fr: 'Médecin', nl: 'Arts', context_fr: 'Je vais chez le médecin.' },
      { id: 'v7-4', fr: 'Hôpital', nl: 'Ziekenhuis', context_fr: 'Il est à l\'hôpital.' },
      { id: 'v7-5', fr: 'Médicament', nl: 'Medicijn', context_fr: 'Je dois prendre un médicament.' },
      { id: 'v7-6', fr: 'Douleur', nl: 'Pijn', context_fr: 'J\'ai une douleur à la tête.' },
      { id: 'v7-7', fr: 'Fièvre', nl: 'Koorts', context_fr: 'Je n\'ai pas de fièvre.' },
      { id: 'v7-8', fr: 'Rhume', nl: 'Verkoudheid', context_fr: 'J\'ai un rhume.' },
      { id: 'v7-9', fr: 'Toux', nl: 'Hoest', context_fr: 'J\'ai une mauvaise toux.' },
      { id: 'v7-10', fr: 'Aller bien', nl: 'Zich goed voelen', context_fr: 'Ça va bien maintenant.' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Ziek"?',
        options: ['Malade', 'Médecin', 'Santé'],
        correct_answer: 'Malade'
      },
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Médecin"?',
        options: ['Arts', 'Ziekenhuis', 'Medicijn'],
        correct_answer: 'Arts'
      },
      {
        type: 'multiple_choice',
        question: 'Welk woord betekent "Pijn"?',
        options: ['Douleur', 'Fièvre', 'Toux'],
        correct_answer: 'Douleur'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Je suis malade"',
        target_words: ['suis', 'malade']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "J\'ai mal à la tête"',
        target_words: ['mal', 'tête']
      }
    ]
  },

  // ============ A1.8: Vrijetijd ============
  {
    id: 'a1_u08',
    title: 'Vrijetijd en Hobby\'s',
    description: 'Leer vrijetijd en hobby gerelateerde woorden.',
    level: 'A1.8',
    vocabulary: [
      { id: 'v8-1', fr: 'Loisirs', nl: 'Vrijetijd', context_fr: 'J\'aime passer du temps dans mes loisirs.' },
      { id: 'v8-2', fr: 'Sport', nl: 'Sport', context_fr: 'Je fais du sport le week-end.' },
      { id: 'v8-3', fr: 'Football', nl: 'Voetbal', context_fr: 'J\'aime jouer au football.' },
      { id: 'v8-4', fr: 'Tennis', nl: 'Tennis', context_fr: 'Je joue au tennis.' },
      { id: 'v8-5', fr: 'Cinéma', nl: 'Bioscoop', context_fr: 'Je vais au cinéma ce soir.' },
      { id: 'v8-6', fr: 'Film', nl: 'Film', context_fr: 'C\'est un très bon film.' },
      { id: 'v8-7', fr: 'Musique', nl: 'Muziek', context_fr: 'J\'aime écouter de la musique.' },
      { id: 'v8-8', fr: 'Livre', nl: 'Boek', context_fr: 'Je lis un livre intéressant.' },
      { id: 'v8-9', fr: 'Jouer', nl: 'Spelen', context_fr: 'Je joue de la guitare.' },
      { id: 'v8-10', fr: 'Danser', nl: 'Dansen', context_fr: 'Je danse le samedi soir.' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Sport"?',
        options: ['Loisirs', 'Sport', 'Tennis'],
        correct_answer: 'Sport'
      },
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Cinéma"?',
        options: ['Film', 'Bioscoop', 'Musique'],
        correct_answer: 'Bioscoop'
      },
      {
        type: 'multiple_choice',
        question: 'Welk woord betekent "Muziek"?',
        options: ['Musique', 'Danser', 'Jouer'],
        correct_answer: 'Musique'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "J\'aime jouer au football"',
        target_words: ['aime', 'jouer', 'football']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Je vais au cinéma"',
        target_words: ['vais', 'cinéma']
      }
    ]
  },

  // ============ A1.9: Wonen ============
  {
    id: 'a1_u09',
    title: 'Wonen',
    description: 'Leer huizen en kamers gerelateerde woorden.',
    level: 'A1.9',
    vocabulary: [
      { id: 'v9-1', fr: 'Maison', nl: 'Huis', context_fr: 'J\'habite dans une grande maison.' },
      { id: 'v9-2', fr: 'Appartement', nl: 'Appartement', context_fr: 'Je vis dans un appartement.' },
      { id: 'v9-3', fr: 'Chambre', nl: 'Slaapkamer', context_fr: 'Ma chambre est petite.' },
      { id: 'v9-4', fr: 'Cuisine', nl: 'Keuken', context_fr: 'La cuisine est moderne.' },
      { id: 'v9-5', fr: 'Salle de bain', nl: 'Badkamer', context_fr: 'La salle de bain est propre.' },
      { id: 'v9-6', fr: 'Salon', nl: 'Woonkamer', context_fr: 'Nous regardons la télé dans le salon.' },
      { id: 'v9-7', fr: 'Mur', nl: 'Muur', context_fr: 'Les murs sont bleu clair.' },
      { id: 'v9-8', fr: 'Fenêtre', nl: 'Raam', context_fr: 'La fenêtre donne sur la rue.' },
      { id: 'v9-9', fr: 'Porte', nl: 'Deur', context_fr: 'Ouvre la porte, s\'il te plaît.' },
      { id: 'v9-10', fr: 'Escalier', nl: 'Trap', context_fr: 'Les escaliers sont au centre.' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Huis"?',
        options: ['Maison', 'Appartement', 'Chambre'],
        correct_answer: 'Maison'
      },
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Salle de bain"?',
        options: ['Badkamer', 'Keuken', 'Woonkamer'],
        correct_answer: 'Badkamer'
      },
      {
        type: 'multiple_choice',
        question: 'Welk woord betekent "Raam"?',
        options: ['Porte', 'Fenêtre', 'Mur'],
        correct_answer: 'Fenêtre'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "J\'habite dans une maison"',
        target_words: ['habite', 'maison']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "La cuisine est moderne"',
        target_words: ['cuisine', 'moderne']
      }
    ]
  },

  // ============ A1.10: Persoonlijke Vaardigheden ============
  {
    id: 'a1_u10',
    title: 'Persoonlijke Vaardigheden',
    description: 'Samenvatting en verdieping van persoonlijke vaardigheden.',
    level: 'A1.10',
    vocabulary: [
      { id: 'v10-1', fr: 'Parler', nl: 'Spreken', context_fr: 'Je parle français et néerlandais.' },
      { id: 'v10-2', fr: 'Comprendre', nl: 'Begrijpen', context_fr: 'Je comprends le français.' },
      { id: 'v10-3', fr: 'Lire', nl: 'Lezen', context_fr: 'Je lis des livres en français.' },
      { id: 'v10-4', fr: 'Écrire', nl: 'Schrijven', context_fr: 'Je veux écrire une lettre.' },
      { id: 'v10-5', fr: 'Apprendre', nl: 'Leren', context_fr: 'J\'apprends le français chaque jour.' },
      { id: 'v10-6', fr: 'Langue', nl: 'Taal', context_fr: 'Le français est une belle langue.' },
      { id: 'v10-7', fr: 'Difficile', nl: 'Moeilijk', context_fr: 'C\'est un peu difficile.' },
      { id: 'v10-8', fr: 'Facile', nl: 'Makkelijk', context_fr: 'Pour moi, c\'est facile.' },
      { id: 'v10-9', fr: 'Intéressant', nl: 'Interessant', context_fr: 'C\'est très intéressant!' },
      { id: 'v10-10', fr: 'Bravo!', nl: 'Goed zo!', context_fr: 'Bravo, vous parlez très bien!' }
    ],
    drills: [
      {
        type: 'multiple_choice',
        question: 'Hoe zeg je "Spreken"?',
        options: ['Parler', 'Lire', 'Apprendre'],
        correct_answer: 'Parler'
      },
      {
        type: 'multiple_choice',
        question: 'Wat betekent "Comprendre"?',
        options: ['Begrijpen', 'Schrijven', 'Lezen'],
        correct_answer: 'Begrijpen'
      },
      {
        type: 'multiple_choice',
        question: 'Welk woord betekent "Moeilijk"?',
        options: ['Facile', 'Difficile', 'Intéressant'],
        correct_answer: 'Difficile'
      },
      {
        type: 'speaking',
        prompt: 'Zeg "Je parle français"',
        target_words: ['parle', 'français']
      },
      {
        type: 'speaking',
        prompt: 'Zeg "J\'apprends le français" ',
        target_words: ['apprends', 'français']
      }
    ]
  }
];
