import Card from 'react-bootstrap/Card';

export const Products = () => {
  return (
    <div className="all-card">
      <div className="all-card__title">
        <p>Nouveaux produits</p>
      </div>
      <div className="all-card__products">
        <Card className="animate-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="coeur_cafe.png" />
          <Card.Body>
            <Card.Title>Coeur Cafe</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="animate-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="baklawa_amande.png" />
          <Card.Body>
            <Card.Title>Baklawa Amande</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="animate-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="artichaut_pistache.png" />
          <Card.Body>
            <Card.Title>Artichaut Pistache</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="animate-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="boule_de_pistache.png" />
          <Card.Body>
            <Card.Title>Boule De Pistache</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="animate-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="boulette_pignon.png" />
          <Card.Body>
            <Card.Title>Boulette Pignon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="animate-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="machmoum_pistache.png" />
          <Card.Body>
            <Card.Title>Machmoum Pistache</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
