function FooterComponent() {
  return (
    <>
        <div class="container text-dark-emphasis pt-5 font-size-min mb-5">
          <div class="row justify-content-start">
            <div class="col col-md-2 d-flex p-0 offset-2">
              <div class="p-2">
                <i class="fs-3 bi bi-facebook"></i>
              </div>
              <div class="p-2">
                <i class="fs-3 bi bi-instagram"></i>
              </div>
              <div class="p-2">
                <i class="fs-3 bi bi-twitter-x"></i>
              </div>
              <div class="p-2">
                <i class="fs-3 bi bi-youtube"></i>
              </div>
            </div>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col col-md-2">
              <p>Audio and Subtitles</p>
              <p>Media Center</p>
              <p>Privacy</p>
              <p>Contact Us</p>
              <button
                type="button"
                class="btn btn-outline-secondary font-size-min ps-1 pe-1 text-center mt-2 rounded-0">
                Service Code
              </button>
            </div>
            <div class="col col-md-2">
              <p>Audio Description</p>
              <p>Ivestor Relations</p>
              <p>Legal Notices</p>
            </div>
            <div class="col col-md-2">
              <p>Help Center</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
            </div>
            <div class="col col-md-2">
              <p>Gift Cards</p>
              <p>Terms of Use</p>
              <p>Corporate Information</p>
            </div>
          </div>
          <div class="row justify-content-start fs-7 mt-3">
            <div class="col col-md-6 d-flex p-0 offset-2 text-white-50">
              <p class="font-size-min">&copy 1997-2019 Netflix, Inc.</p>
            </div>
          </div>
        </div>
    </>
  );
}
export default FooterComponent;
