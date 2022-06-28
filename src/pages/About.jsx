import BackgroundCustom from "../components/BackgroundCustom";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  const dropDownInformations = [
    {
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et tout les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Services",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div>
      <Navigation />
      <BackgroundCustom background="bg-about" />
      {dropDownInformations.map((informations, index) => (
        <Dropdown
          key={index}
          title={informations.title}
          description={informations.description}
        />
      ))}

      <Footer />
    </div>
  );
};

export default About;
