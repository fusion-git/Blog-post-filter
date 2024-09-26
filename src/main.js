const blogSreach = document.querySelector('#blogSreach');

blogSreach.addEventListener('keyup', fillterPosts);

function fillterPosts(){
   let fillterValue = blogSreach.value.toLowerCase();
   const posts = document.querySelectorAll('.card').forEach(post => {
      post.innerText.toLowerCase().indexOf(fillterValue) > -1
      ? post.style.display = ''
      : post.style.display = 'none';
   })
}  

const header = document.querySelector('.hero');
const mainNav = document.querySelector('.mainNav');

const navObsCallback = (e) => {
   !e[0].isIntersecting ? mainNav.classList.add('applyBackground') : mainNav.classList.remove('applyBackground');
}

const navObsOptions = {threshold: .9};

const navObs = new IntersectionObserver(navObsCallback, navObsOptions);

navObs.observe(header);