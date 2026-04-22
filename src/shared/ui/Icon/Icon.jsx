import sprite from 'shared/assets/images/svg/sprite.svg';

export const Icon = ({ name, size = 24, ...props }) => {
  return (
    <svg width={size} height={size} aria-hidden='true' {...props}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};
