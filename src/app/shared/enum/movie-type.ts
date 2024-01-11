export enum movieTypeEnum {
  movie = 'movie',
  series = 'series',
  episode = 'episode',
}
export const movieTypeLabels = {
  [movieTypeEnum.movie]: 'Film',
  [movieTypeEnum.series]: 'Serial',
  [movieTypeEnum.episode]: 'Odcinek',
};
