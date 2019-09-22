import Immutable from 'seamless-immutable';
import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
};

const initialState = Immutable({
  currentSong: null,
  status: Sound.status.PLAYING,
});

export default function player(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD:
      return state.merge({
        currentSong: action.playload.song,
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
    default:
      return state;
  }
}

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    playload: { song },
  }),

  play: () => ({ type: Types.PLAY }),

  pause: () => ({ type: Types.PAUSE }),
};
