import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Titulo da playlist</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Título da música</td>
          <td>Nome do Artista</td>
          <td>Título do álbum</td>
          <td>3:55</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
