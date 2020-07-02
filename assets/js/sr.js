  import assignProps from './assignProps';
  export default function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true
  };

  /* Projects Section */
  ScrollReveal().reveal('.project-wrapper__text', 
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.project-wrapper__image', 
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? 'right' : 'bottom'
      }, defaultProps)
  );

}