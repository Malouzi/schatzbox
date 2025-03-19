//Background.jsx

import bgImage from '../../assets/background.png';

export default function Hintergrund(props) {
  return (
    <div {...props}>
      <img src={bgImage} alt="Hintergrund" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
