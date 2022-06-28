import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="bg-about">
        <div className="bg-darken"></div>
      </div>
      <Dropdown
        title="Fiabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes."
      />
      <br />
      <Dropdown
        title="Respect"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <br />
      <Dropdown
        title="Services"
        description="Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question."
      />
      <br />
      <Dropdown
        title="Sécurité"
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes."
      />

      <Footer />
    </div>
  );
};

export default About;
