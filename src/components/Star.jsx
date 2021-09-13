export default function Star(props) {
  const {
    rating
  } = props;

  const stars = '⭐'.repeat( Math.ceil(rating) );

  return (
    <>{stars}</>
  )
}
