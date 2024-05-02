import { useEffect } from 'react';

export default function Home(): JSX.Element {
  useEffect(() => {
    // Construct the redirect URL
    const redirectUrl = `${window.location.origin}/Getting-Started`;
    window.location.href = redirectUrl;
  }, []); // Empty array means this effect runs only once after initial render

  // Return null because the component doesn't need to render anything
  return null;
}
