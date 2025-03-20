//Background.jsx

import bgImage from '../../assets/Background.png';

export default function Hintergrund(props) {
  return (
    <div {...props}>
      <img src={bgImage} alt="Hintergrund" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
