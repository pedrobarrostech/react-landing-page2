import React from 'react'

export default props => (
    <div>
    <div id='index-banner' className='parallax-container'>
      <div className='section no-pad-bot main-banner'>
        <div className='container'>
          <div className='row center'>
            <img className='main-logo' src={ require('../template/images/artwork.png') } width="400" />
          </div>
          <div className='row center'>
            <a href='http://materializecss.com/getting-started.html' id='download-button' className='btn-large waves-effect waves-light red darken-3'>Marque um horário</a>
          </div>
          <br/><br/><br/><br/>

        </div>
      </div>
    </div>


    <div className='row'>
      <div className='col s6 m6 bg-left'></div>

      <div className='col s6 m6 gray1 box'>
        <div className='block'>
          <h2 className='center'>Bem-vindo á Artwork Tatueria</h2>
          <br/>
          <p className='red-text text-darken-3'>By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally.</p>
          <br/>
          <p className='light'>By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
        </div>
      </div>
    </div>


    <div className='container'>
      <div className='section services'>

        <div className='col s12 center'>
            <h2>Serviços</h2>
        </div>

        <div className='row'>
          <div className='col s12 m4'>
            <div className='icon-block'>
              <h2 className='center red-text text-darken-3'><i className='material-icons'>flash_on</i></h2>
              <h5 className='center'>Speeds up development</h5>

              <p className='light'>We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </div>

          <div className='col s12 m4'>
            <div className='icon-block'>
              <h2 className='center red-text text-darken-3'><i className='material-icons'>group</i></h2>
              <h5 className='center'>User Experience Focused</h5>

              <p className='light'>By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
            </div>
          </div>

          <div className='col s12 m4'>
            <div className='icon-block'>
              <h2 className='center red-text text-darken-3'><i className='material-icons'>settings</i></h2>
              <h5 className='center'>Easy to work with</h5>

              <p className='light'>We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className='row'>
      <div className='col s6 m6 gray1'>
        <div className='block'>
          <h2 className='center'>Localização</h2>
          <br/>
          <p className='red-text text-darken-3'>By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally.</p>
          <br/>
          <p className='light'>By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
        </div>
      </div>

      <div className='col s6 m6 bg-right'></div>
    </div>

    <div className='container'>
      <div className='section'>

        <div className='row'>
          <div className='col s12 center'>
            <h2>Contato</h2>
            <p className='left-align light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
          </div>
        </div>

      </div>
    </div>


    <div className='parallax-container valign-wrapper'>
      <div className='section no-pad-bot'>
        <div className='container'>
          <div className='row center'>
            <h5 className='header col s12 light'>A modern responsive front-end framework based on Material Design</h5>
          </div>
        </div>
      </div>
    </div>

    <footer className='page-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Artwork</h5>
            <p className='grey-text text-lighten-4'>We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


          </div>
          <div className='col l3 s12'>
            <h5 className='white-text'>Mapa do Site</h5>
            <ul>
              <li><a className='white-text' href='#!'>Sobre</a></li>
              <li><a className='white-text' href='#!'>Serviços</a></li>
              <li><a className='white-text' href='#!'>Galeria</a></li>
              <li><a className='white-text' href='#!'>Contato</a></li>
            </ul>
          </div>
          <div className='col l3 s12'>
            <h5 className='white-text'>Redes Sociais</h5>
            <ul>
              <li><a className='white-text' href='#!'>Facebook</a></li>
              <li><a className='white-text' href='#!'>Instagram</a></li>
              <li><a className='white-text' href='#!'>Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
        Desenvolvido por <a className='brown-text text-lighten-3' href='http://pedroaugust8.com'>Pedro Barros</a>
        </div>
      </div>
    </footer>
  </div>
)