import Immutable from 'seamless-immutable';
import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
};

const initialState = Immutable({
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  duration: null,
});

export default function player(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD:
      return state.merge({
        currentSong: action.playload.song,
        list: action.playload.list,
        status: Sound.status.PLAYING,
      });
    case Types.PLAY:
      return state.merge({
        status: Sound.status.PLAYING,
      });
    case Types.PAUSE:
      return state.merge({
        status: Sound.status.PAUSED,
      });
    case Types.PREV: {
      const currentIndex = state.list.findIndex(
        song => song.id === state.currentSong.id
      );
      const prev = state.list[currentIndex - 1];

      if (prev) {
        return state.merge({
          currentSong: prev,
          status: Sound.status.PLAYING,
        });
      }

      return state;
    }
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(
        song => song.id === state.currentSong.id
      );
      const next = state.list[currentIndex + 1];

      if (next) {
        return state.merge({
          currentSong: next,
          status: Sound.status.PLAYING,
        });
      }

      return state;
    }
    case Types.PLAYING:
      return state.merge({
        ...action.payload,
      });
    default:
      return state;
  }
}

export const Creators = {
  loadSong: (song, list) => ({
    type: Types.LOAD,
    playload: { song, list },
  }),

  play: () => ({ type: Types.PLAY }),

  pause: () => ({ type: Types.PAUSE }),

  prev: () => ({ type: Types.PREV }),

  next: () => ({ type: Types.NEXT }),

  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration },
  }),
};
