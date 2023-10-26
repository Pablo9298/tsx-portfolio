import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
  fill?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg width={props.width || "35"} height={props.height || "35"} viewBox={props.viewBox || "0 -3 35 35"}  fill={props.fill || '#fff'}>
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};

