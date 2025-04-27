import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const questionsAndAnswers = [
    {
      question: "Comment puis-je suivre l'état de ma commande ?",
      answer: "Pour suivre l'état de votre commande, veuillez consulter votre boîte e-mail. Nous avons envoyé un code de suivi que vous pouvez utiliser pour suivre votre commande via le lien fourni dans l'e-mail.",
    },
    {
      question: 'Quels sont les délais de livraison ?',
      answer: "Pour les livraisons standard, les délais sont de 10 à 20 jours ouvrables pour les commandes à l'étranger. Avec la livraison express, les délais sont réduits à environ 4 à 6 jours ouvrables.",
    },
    {
      question: 'Puis-je commander des produits non disponible sur le site ou sur mesure ?',
      answer: "Si vous ne trouvez pas le produit que vous cherchez sur notre site ou si vous avez besoin d'une commande sur mesure, veuillez contacter notre service clientèle",
    },
    {
        question: 'Quelles sont vos politiques de retour ?',
        answer: "Veuillez consulter la page Conditions générales pour obtenir des informations détaillées sur nos politiques de retour et d'échange.",
      },
  ];
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ padding: '3rem', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'red', marginBottom: '2rem' }}>
        Questions Fréquentes
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {questionsAndAnswers.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '80%',
              marginBottom: '1rem',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { color: 'red' },
            }}
            onClick={() => handleToggle(index)}
          >
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                transition: 'color 0.3s ease',
              }}
            >
              {`${item.question}`}
              <IconButton
                size="small"
                sx={{
                  marginLeft: '10px',
                  transition: 'transform 0.3s',
                }}
              >
                {openIndex === index ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Typography>
            <Box
              sx={{
                overflow: 'hidden',
                maxHeight: openIndex === index ? '500px' : '0',
                transform: openIndex === index ? 'translateY(0)' : 'translateY(-20px)',
                opacity: openIndex === index ? 1 : 0,
                transition: 'transform 0.6s ease-out, max-height 0.5s ease-out, opacity 0.3s ease-in-out',
                paddingTop: openIndex === index ? '1rem' : '0',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  opacity: openIndex === index ? 1 : 0,
                  fontSize: '1.4rem',
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                {item.answer}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
