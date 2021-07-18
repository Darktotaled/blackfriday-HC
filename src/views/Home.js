import React from "react"
import './Home.scss'


class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          name: 'Resident Evil 8 PS5',
          price: 300,
          discounted: 0.6,
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._OheNFo1t6r90TcshA2LlQHaJO%26pid%3DApi&f=1'
        },
        {
          name: "Demon Souls PS5",
          price: 250,
          discounted: 0.5,
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.siliconera.com%2Fwp-content%2Fuploads%2F2020%2F09%2FDemons-Souls-Screenshots-and-PS5-Box-Art-from-Amazon-Australia-Siliconera-3.jpg&f=1&nofb=1'
        },
        {
          name: "Ratchet and Clank PS5",
          price: 220,
          discounted: 0.4,
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.f_yPAdLpD9Fg37YPWmphZwHaJO%26pid%3DApi&f=1"
        }
      ]
    }
  }
  store = () => {
    localStorage.setItem("email", document.form1.email.value)
  }
  render() {
    return (
      <div id="home">
        <header>
          <h1>Neon <span>Games</span></h1>
          <div className="discount">Descontos de até 60%. Confira!</div>
          <br />
          <br />
        </header>
        <main>

          {this.state.products.map((oferta) => {
            return (
              <div className="product-card">
                <div className="product-details">
                  <img src={oferta.image} alt={oferta.name} />
                  {oferta.name}
                  <br />
                  <div className="dashed-price">
                    R${oferta.price}
                  </div>
                  <br />
                  Por apenas R${oferta.price - (oferta.discounted * oferta.price)}

                </div>
              </div>
            )
          })
          }
          <div className="register">
            Cadastre seu e-mail para receber promoções
          </div>
          <div className="register-field">
            <form name="form1" action="/">

              <label htmlFor="email">Email: </label>
              <input type="email" id="email" size="45" />
              <input type="button" value="Cadastrar" onClick={this.store} />
            </form>
          </div>
        </main>
      </div >
    )
  }
}

export default Home