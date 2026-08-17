// Load all slide partials
const slidesContainer = document.getElementById('slides-container');
const slideFiles = [
  'slides/slide-01-title.html',
  'slides/slide-02-reality.html',
  'slides/slide-03-problem.html',
  'slides/slide-04-solution.html',
  'slides/slide-05-pipeline.html',
  'slides/slide-06-ner.html',
  'slides/slide-07-demo.html',
  'slides/slide-08-scam.html',
  'slides/slide-09-tech.html',
  'slides/slide-10-impact.html',
  'slides/slide-11-journey.html',
  'slides/slide-12-closing.html'
];

async function loadSlides() {
  try {
    for (const file of slideFiles) {
      const response = await fetch(file);
      if (!response.ok) {
        console.error(`Failed to load ${file}`);
        continue;
      }
      const html = await response.text();
      
      // Create a container for this slide
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html.trim();
      
      // Extract the actual <section> element
      const section = tempDiv.querySelector('section');
      if (section) {
        // Add unique ID
        section.id = `slide-${slideFiles.indexOf(file)}`;
        
        // Add active class to first slide only
        if (slideFiles.indexOf(file) === 0) {
          section.classList.add('active');
        }
        
        slidesContainer.appendChild(section);
      }
    }
  } catch (error) {
    console.error('Error loading slides:', error);
    
    // Fallback: show static slides in index.html if fetch fails
    console.log('Using fallback from inline HTML');
  }
}

loadSlides();
