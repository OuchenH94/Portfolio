import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ATELIER LOYER.png";
import emotion from "../../Assets/Projects/L'ATELIER ARCHI ADDICT.png";
import editor from "../../Assets/Projects/SBM IMMOBILIER.png";
import chatify from "../../Assets/Projects/Atout-Commerces.png";
import suicide from "../../Assets/Projects/ARSATI.png";
import bitsOfCode from "../../Assets/Projects/CABINET CHATEAUBRIAND IMMOBILIER .png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Atout Commerces"
              description="Atout Commerces is a Belgian website dedicated to supporting and promoting local commerce, particularly in the Wallonia-Brussels region. The platform offers various services for businesses, including:
              *Commercial real estate listings – Helping entrepreneurs find retail spaces for rent or sale.
              *Business transfer services – Assisting in buying or selling existing businesses.
              *Support for business creation – Providing resources and guidance for new entrepreneurs.
              *Networking and professional events – Organizing trade fairs and workshops for commerce professionals."
              demoLink="https://www.atout-commerces.be/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cabinet Chateau Briand"
              description="Cabinet Chateaubriand is the official website of a Belgian law firm specializing in business law, commercial law, and litigation. The firm provides legal services to companies, entrepreneurs, and individuals, with expertise in areas such as:
              *Corporate & Commercial Law – Business creation, contracts, mergers & acquisitions.
              *Banking & Finance Law – Loans, investments, financial disputes.
              *Real Estate Law – Property transactions, leases, construction disputes.
              *Litigation & Arbitration – Commercial disputes, debt recovery, civil liability.
              *Insolvency & Restructuring – Bankruptcy proceedings, business recovery."
              demoLink="https://www.cabinetchateaubriand.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SBM Immo"
              description="SBM Immo is a Belgian real estate agency specializing in property sales, rentals, and real estate investments, primarily in Wallonia and Brussels. The website serves as a platform for buying, selling, and renting residential and commercial properties.
              -Key Features of the Website:
              *Property Listings – Houses, apartments, land, and commercial real estate for sale or rent.
              *Real Estate Services – Property valuation, investment advice, and transaction assistance.
              *Local Expertise – Focus on regions like Brussels, Liège, Namur, Charleroi, and Mons.
              *French-Language Content – Primarily catering to French-speaking clients in Belgium.
              *Professional Team – Profiles of agents with local market knowledge."
              demoLink="https://www.sbm-immo.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Architecte Loyer"
              description="The website is a professional portfolio and business website for Architecte Loyer,an individual architect. Based on the domain name, it showcases architectural projects, services, and expertise.
              -Features of the Website:
              *Portfolio – Display of past and current architectural projects (residential, commercial, urban design, etc.).
              *Services – Information on design, planning, renovation, or consultancy services offered.
              *About the Architect/Firm – Background, qualifications, and philosophy.
              *Contact Information – Ways to get in touch for inquiries or collaborations.
              *Blog/News (Optional) – Articles on architecture trends, case studies, or firm updates."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.architecte-loyer.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Arsati Agence Immobiliere"
              description="The website belong to Arsati Immobilier, a French real estate agency. Based on the domain name and common industry standards, here’s what you can expect on the site:
              -Key Features of the Website:
              *Property Listings – Showcases available properties for sale or rent (apartments, houses, commercial spaces, etc.).
              *Search Tools – Filters for location, price range, property type, and other criteria.
              *Services Offered – May include buying/selling assistance, property valuation, rental management, and investment consulting.
              *Agency Information – Background on the company, its team, and its expertise in the local real estate market."
              demoLink="https://www.arsati-immobilier.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="L'ATELIER ARCHI ADDICT"
              description="The website in an online portfolio and blog of L'Atelier Archi-Addict, a French architecture firm or a platform dedicated to architectural design, interior decoration, and DIY (Do-It-Yourself) projects.
              -Key Features of the Website:
              *Portfolio of Projects – Likely showcases residential, commercial, or creative architectural designs.
              *DIY & Interior Design Tips – May include tutorials, inspiration, and guides for home renovation and decoration.
              *Blog or Articles – Possibly covers trends in architecture, sustainable design, and creative home solutions.
              *Services Offered – Could include architectural consulting, space planning, renovation advice, or 3D visualization."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://www.latelier-archi-addict.fr/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
