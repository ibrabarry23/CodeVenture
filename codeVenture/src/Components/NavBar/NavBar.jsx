import { useState } from "react";
import { ButtonNavBar } from "./ButtonNavBar";
import { ButtonProfile } from "./ButtonProfile";
import { Logo } from "./Logo";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`w-full h-10 colorBackCyan flex justify-between items-center ring ring-offset-gray-200 p-1 ${isMenuOpen ? "lg:p-1" : ""}`}>
        <Logo />
        <div className="flex flex-col h-full ">
      <div className="flex flex-col items-end">
        <button onClick={toggleMenu} className="lg:hidden">
        {isMenuOpen ? <MenuIconOpen /> : <MenuIcon />}
      </button>
      </div>
      <nav className={`lg:flex  ${isMenuOpen ? "flex mt-30 mt-2 p-8 flex-row justify-items-center z-10 left-6 bg-blue-900 opacity-90 gap-5 rounded-md" : "hidden"}`}>
        <div className="lg:flex">
        <ButtonNavBar name="HOME" />
        <ButtonNavBar name="GIOCA" />
        <ButtonNavBar name="NOVITA'" />
        <ButtonNavBar name="CONTATTACI" />
        </div>
        <div className="lg:flex flex items-center">
          <ButtonProfile  />
        </div>
      </nav>
      </div>
    </div>
  );
}

const MenuIcon = () => (
  <div className="flex">
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100">
<path d="M 27.304688 15.814453 C 24.887577 15.812922 22.441999 15.822575 19.955078 15.847656 A 2.0002 2.0002 0 0 0 19.953125 15.847656 C 17.948487 15.868666 16.279956 17.504039 16.214844 19.507812 L 16.214844 19.472656 C 16.040539 22.954902 15.421296 26.639559 16.261719 30.322266 A 2.0002 2.0002 0 0 0 16.279297 30.398438 C 16.788844 32.285042 18.507945 33.61908 20.460938 33.646484 C 41.866568 34.01192 61.18935 33.79531 78.773438 33.492188 A 2.0002 2.0002 0 0 0 78.775391 33.492188 C 79.931096 33.471418 80.281537 33.038631 80.720703 32.701172 C 81.15987 32.363712 81.550025 31.97977 81.916016 31.564453 C 82.282006 31.149136 82.614958 30.71255 82.894531 30.234375 C 83.174104 29.7562 83.558096 29.353757 83.433594 28.205078 L 83.441406 28.296875 C 83.286591 25.788137 83.721162 23.807832 83.429688 20.591797 A 2.0002 2.0002 0 0 0 83.417969 20.498047 C 83.053676 17.870969 80.745289 15.90521 78.09375 15.966797 L 78.091797 15.966797 C 59.737596 16.379988 44.224462 15.825173 27.304688 15.814453 z M 27.478516 19.818359 C 37.783898 19.827581 47.679491 20.019439 58 20.083984 L 57.498047 21.666016 A 1.0001 1.0001 0 1 0 59.404297 22.271484 L 60.09375 20.099609 C 60.803649 20.102557 61.483817 20.113976 62.199219 20.115234 L 62.326172 24.044922 A 1.0001 1.0001 0 1 0 64.324219 23.980469 L 64.199219 20.115234 C 68.715465 20.112044 73.341225 20.075826 78.183594 19.966797 A 2.0002 2.0002 0 0 0 78.185547 19.966797 C 78.829859 19.951587 79.347 20.394689 79.445312 21.029297 C 79.662848 23.553509 79.312666 25.420102 79.445312 28.212891 C 79.443558 28.215185 79.443391 28.211448 79.441406 28.214844 C 79.343016 28.383137 79.1399 28.665864 78.916016 28.919922 C 78.704096 29.160403 78.472349 29.371963 78.316406 29.496094 C 64.941094 29.725409 50.567851 29.898027 35.064453 29.806641 L 35.412109 29.5 A 1.0001 1.0001 0 0 0 34.789062 27.742188 A 1.0001 1.0001 0 0 0 34.085938 28.003906 L 32.087891 29.775391 C 31.221431 29.768411 30.33065 29.75485 29.457031 29.746094 L 30.367188 28.617188 A 1.0001 1.0001 0 0 0 29.560547 26.978516 A 1.0001 1.0001 0 0 0 28.810547 27.361328 L 26.912109 29.716797 C 26.145916 29.707622 25.394746 29.702032 24.623047 29.691406 L 25.576172 28.191406 A 1.0001 1.0001 0 0 0 24.691406 26.644531 A 1.0001 1.0001 0 0 0 23.888672 27.119141 L 22.269531 29.666016 C 21.676531 29.656733 21.119685 29.656666 20.523438 29.646484 A 2.0002 2.0002 0 0 0 20.517578 29.646484 C 20.339114 29.643984 20.209297 29.533484 20.15625 29.365234 C 19.586536 26.790575 20.009432 23.496498 20.201172 19.849609 C 22.660858 19.825664 25.082416 19.816215 27.478516 19.818359 z M 49.849609 22.859375 C 49.734547 22.879438 49.621828 22.922984 49.517578 22.990234 C 49.100578 23.259234 48.981 23.815422 49.25 24.232422 C 49.519 24.649422 50.075187 24.770953 50.492188 24.501953 C 50.909188 24.232953 51.030719 23.674812 50.761719 23.257812 C 50.559969 22.945062 50.194797 22.799187 49.849609 22.859375 z M 42.642578 26.033203 C 42.527516 26.053266 42.414797 26.094859 42.310547 26.162109 C 41.893547 26.431109 41.773969 26.98925 42.042969 27.40625 C 42.311969 27.82325 42.868156 27.942828 43.285156 27.673828 C 43.702156 27.404828 43.821734 26.848641 43.552734 26.431641 C 43.350984 26.118891 42.987766 25.973016 42.642578 26.033203 z M 27.589844 39.724609 C 25.172754 39.72308 22.727073 39.732732 20.240234 39.757812 C 18.235596 39.778822 16.565112 41.412241 16.5 43.416016 C 16.322036 46.935897 15.903031 50.139121 16.714844 53.695312 A 2.0002 2.0002 0 0 0 16.734375 53.773438 C 17.243923 55.660041 18.96107 56.99408 20.914062 57.021484 C 42.288623 57.386484 61.203522 57.659222 78.824219 57.355469 C 80.09334 57.332659 80.876476 56.793722 81.695312 56.007812 C 82.51415 55.221904 83.226728 54.067595 83.46875 52.613281 C 83.883497 50.123731 83.99464 47.586146 83.714844 44.5 A 2.0002 2.0002 0 0 0 83.703125 44.40625 C 83.338924 41.77983 81.031562 39.816396 78.380859 39.876953 L 78.376953 39.876953 C 60.023558 40.290052 44.50947 39.735315 27.589844 39.724609 z M 27.765625 43.728516 C 34.370001 43.734291 40.781746 43.824874 47.25 43.904297 L 47.701172 45.857422 A 1.0001 1.0001 0 1 0 49.648438 45.40625 L 49.306641 43.925781 C 49.824658 43.931898 50.365521 43.931663 50.884766 43.9375 L 51.615234 47.642578 A 1.0005007 1.0005007 0 0 0 53.578125 47.253906 L 52.925781 43.953125 C 57.699625 44.001996 62.523664 44.036057 67.539062 44.011719 L 66.722656 47.121094 A 1.0001 1.0001 0 1 0 68.65625 47.628906 L 69.609375 44.001953 C 72.502162 43.979088 75.439064 43.943259 78.470703 43.875 A 2.0002 2.0002 0 0 0 78.472656 43.875 C 79.116954 43.85979 79.634092 44.302915 79.732422 44.9375 C 79.977034 47.699354 79.883032 49.796584 79.523438 51.955078 C 79.432457 52.501764 79.182444 52.876706 78.925781 53.123047 C 78.733285 53.307803 78.456371 53.351028 78.537109 53.357422 C 64.997595 53.587068 50.616846 53.474799 34.941406 53.244141 L 34.699219 51.419922 A 1.0001 1.0001 0 0 0 33.658203 50.539062 A 1.0001 1.0001 0 0 0 32.714844 51.683594 L 32.917969 53.210938 C 32.281915 53.201255 31.620956 53.191668 30.980469 53.181641 L 30.738281 51.15625 A 1.0001 1.0001 0 0 0 29.710938 50.259766 A 1.0001 1.0001 0 0 0 28.753906 51.392578 L 28.962891 53.148438 C 28.3112 53.137978 27.662218 53.127939 27.005859 53.117188 L 26.734375 50.492188 A 1.0001 1.0001 0 0 0 25.720703 49.580078 A 1.0001 1.0001 0 0 0 24.746094 50.697266 L 24.992188 53.085938 C 23.635396 53.063326 22.353778 53.045003 20.976562 53.021484 A 2.0002 2.0002 0 0 0 20.970703 53.021484 C 20.792706 53.018984 20.662727 52.909652 20.609375 52.742188 C 20.01394 50.072068 20.303457 47.331032 20.488281 43.759766 C 22.947863 43.73583 25.369565 43.72642 27.765625 43.728516 z M 27.78125 64.078125 C 25.364139 64.076594 22.918561 64.086247 20.431641 64.111328 A 2.0002 2.0002 0 0 0 20.429688 64.111328 C 18.425705 64.132338 16.755595 65.764701 16.689453 67.767578 C 16.689453 67.767578 16.689453 67.769531 16.689453 67.769531 C 16.510655 71.3123 16.0897 75.183011 16.916016 78.802734 A 2.0002 2.0002 0 0 0 16.935547 78.878906 C 17.445094 80.765511 19.162242 82.099549 21.115234 82.126953 C 42.437263 82.491222 61.11954 83.617716 78.824219 81.541016 A 2.0002 2.0002 0 0 0 78.826172 81.541016 C 80.432318 81.352194 81.680674 80.544609 82.564453 79.669922 C 83.006343 79.232578 83.364391 78.772484 83.640625 78.269531 C 83.916859 77.766579 84.201083 77.263135 84.099609 76.328125 L 84.107422 76.421875 C 83.948559 73.817084 84.187542 71.977653 83.904297 68.853516 A 2.0002 2.0002 0 0 0 83.894531 68.759766 C 83.53024 66.132644 81.221851 64.168883 78.570312 64.230469 L 78.568359 64.230469 C 60.214184 64.643658 44.701024 64.088845 27.78125 64.078125 z M 27.955078 68.082031 C 42.088814 68.094706 55.339956 68.482971 70.177734 68.357422 L 68.796875 69.744141 A 1.0005858 1.0005858 0 1 0 70.214844 71.15625 L 73.035156 68.320312 C 73.525835 68.313971 74.026987 68.304465 74.521484 68.296875 L 74 68.882812 A 1.000277 1.000277 0 1 0 75.496094 70.210938 L 77.234375 68.253906 C 77.715847 68.244286 78.174724 68.241399 78.660156 68.230469 A 2.0002 2.0002 0 0 0 78.662109 68.228516 C 79.30801 68.213266 79.827378 68.659739 79.923828 69.296875 C 80.152012 71.903928 79.966548 73.670612 80.107422 76.376953 C 80.047162 76.479089 79.928672 76.651271 79.751953 76.826172 C 79.371982 77.202234 78.820229 77.514181 78.359375 77.568359 C 73.140239 78.180547 67.778482 78.48406 62.271484 78.630859 L 62.677734 78.253906 A 1.0001 1.0001 0 0 0 62.015625 76.511719 A 1.0001 1.0001 0 0 0 61.316406 76.787109 L 59.248047 78.707031 C 58.303646 78.721434 57.345208 78.726675 56.390625 78.732422 L 57.816406 76.833984 A 1.0001 1.0001 0 0 0 57.054688 75.222656 A 1.0001 1.0001 0 0 0 56.216797 75.632812 L 53.884766 78.736328 C 52.615975 78.7351 51.344558 78.737168 50.056641 78.724609 L 50.738281 77.177734 A 1.0001 1.0001 0 0 0 49.830078 75.761719 A 1.0001 1.0001 0 0 0 48.908203 76.371094 L 47.884766 78.693359 C 46.610453 78.675862 45.35079 78.665476 44.056641 78.640625 L 43.955078 76.427734 A 1.0001 1.0001 0 0 0 42.894531 75.460938 A 1.0001 1.0001 0 0 0 41.957031 76.519531 L 42.050781 78.595703 C 40.96421 78.572606 39.870759 78.54941 38.769531 78.523438 L 38.535156 76.841797 A 1.0001 1.0001 0 0 0 37.488281 75.966797 A 1.0001 1.0001 0 0 0 36.552734 77.119141 L 36.742188 78.478516 C 31.718282 78.355919 26.537812 78.218486 21.177734 78.126953 A 2.0002 2.0002 0 0 0 21.171875 78.126953 C 20.993878 78.124453 20.863899 78.015121 20.810547 77.847656 C 20.226266 75.221207 20.49448 71.704392 20.677734 68.113281 C 21.87782 68.101602 23.045032 68.102594 24.228516 68.097656 L 24.783203 71.335938 A 1.0001 1.0001 0 1 0 26.753906 70.998047 L 26.255859 68.089844 C 26.818282 68.089105 27.395611 68.08153 27.955078 68.082031 z M 31.826172 71.931641 C 31.711109 71.951703 31.598391 71.993297 31.494141 72.060547 C 31.077141 72.329547 30.957563 72.887687 31.226562 73.304688 C 31.495562 73.721688 32.05175 73.841266 32.46875 73.572266 C 32.88575 73.303266 33.005328 72.745125 32.736328 72.328125 C 32.534578 72.015375 32.171359 71.871453 31.826172 71.931641 z"></path>
</svg>
  </div>
);

const MenuIconOpen = () => (
    <div className="flex ">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100">
<path d="M 28.085938 16.054688 A 2.0002 2.0002 0 0 0 27.886719 16.056641 A 2.0002 2.0002 0 0 0 26.654297 16.574219 L 15.654297 26.574219 A 2.0002 2.0002 0 0 0 15.357422 29.193359 C 23.508964 40.948626 29.747675 47.45172 35.289062 52.058594 L 13.699219 70.535156 A 2.0002 2.0002 0 0 0 13.78125 73.638672 L 26.78125 83.638672 A 2.0002 2.0002 0 0 0 29.177734 83.669922 C 34.707802 79.638889 40.738247 74.933323 50.949219 63.117188 L 69.462891 85.333984 A 2.0002 2.0002 0 0 0 72.537109 85.333984 L 82.537109 73.333984 A 2.0002 2.0002 0 0 0 82.498047 70.728516 C 77.419315 64.983184 71.366379 59.067486 63.888672 52.927734 C 68.607866 48.094962 74.89648 41.567108 85.451172 30.429688 A 2.0002 2.0002 0 0 0 85.21875 27.46875 L 72.21875 17.46875 A 2.0002 2.0002 0 0 0 69.550781 17.675781 C 62.474253 25.117955 56.381759 32.176037 50.947266 38.980469 C 45.446071 32.413277 38.71792 25.195582 29.353516 16.582031 A 2.0002 2.0002 0 0 0 28.085938 16.054688 z M 27.951172 20.800781 C 34.644665 27.03272 40.077318 32.585372 44.587891 37.640625 L 43.105469 40.607422 A 1.0001161 1.0001161 0 1 0 44.894531 41.501953 L 46.015625 39.261719 C 47.223265 40.647594 48.37857 42.005422 49.451172 43.318359 A 2.0002 2.0002 0 0 0 52.572266 43.289062 C 57.937627 36.45549 64.160712 29.27862 71.240234 21.759766 L 77.167969 26.320312 L 75.539062 27.166016 A 1.0002331 1.0002331 0 1 0 76.460938 28.941406 L 78.917969 27.666016 L 81.013672 29.279297 C 79.717036 30.645834 78.883914 31.511044 77.685547 32.771484 L 74.195312 32.074219 A 1.0001 1.0001 0 0 0 73.998047 32.050781 A 1.0001 1.0001 0 0 0 73.804688 34.035156 L 76.052734 34.484375 C 74.831925 35.767002 73.635726 37.025973 72.523438 38.191406 A 1.0001 1.0001 0 0 0 72.234375 38.082031 L 68.101562 37.082031 A 1.0001 1.0001 0 0 0 67.804688 37.050781 A 1.0001 1.0001 0 0 0 67.630859 39.025391 L 70.960938 39.830078 C 70.609182 40.198133 70.13501 40.699234 69.794922 41.054688 L 65 41.054688 A 1.0001 1.0001 0 1 0 65 43.054688 L 67.884766 43.054688 C 67.097955 43.875278 66.668389 44.309281 65.951172 45.054688 L 62 45.054688 A 1.0001 1.0001 0 1 0 62 47.054688 L 64.017578 47.054688 C 63.70271 47.380554 63.376907 47.716906 63.078125 48.025391 L 60.316406 47.105469 A 1.0001 1.0001 0 0 0 59.921875 47.050781 A 1.0001 1.0001 0 0 0 59.683594 49.001953 L 61.539062 49.621094 C 60.968261 50.207783 60.073793 51.142484 59.572266 51.654297 A 2.0002 2.0002 0 0 0 59.751953 54.617188 C 67.362571 60.698487 73.210174 66.476524 78.320312 72.144531 L 71 80.929688 L 70.800781 80.689453 L 71.894531 78.501953 A 1.0001 1.0001 0 0 0 70.955078 77.042969 A 1.0001 1.0001 0 0 0 70.105469 77.607422 L 69.402344 79.013672 L 68.435547 77.851562 L 69.849609 75.582031 A 1.0001 1.0001 0 0 0 68.949219 74.042969 A 1.0001 1.0001 0 0 0 68.150391 74.525391 L 67.087891 76.234375 L 64.677734 73.341797 L 65.832031 71.609375 A 1.0001 1.0001 0 0 0 64.980469 70.042969 A 1.0001 1.0001 0 0 0 64.167969 70.5 L 63.341797 71.740234 L 62.455078 70.675781 L 63.832031 68.609375 A 1.0001 1.0001 0 0 0 62.980469 67.042969 A 1.0001 1.0001 0 0 0 62.167969 67.5 L 61.119141 69.072266 L 52.537109 58.773438 A 2.0002 2.0002 0 0 0 49.472656 58.761719 C 47.91975 60.597148 46.503213 62.209349 45.148438 63.71875 L 43.962891 62.388672 A 1.0001 1.0001 0 0 0 43.164062 62.044922 A 1.0001 1.0001 0 0 0 42.470703 63.71875 L 43.792969 65.203125 C 42.64666 66.451225 41.558856 67.602391 40.537109 68.644531 L 39.980469 65.857422 A 1.0001 1.0001 0 0 0 38.984375 65.041016 A 1.0001 1.0001 0 0 0 38.019531 66.25 L 38.839844 70.349609 C 38.431407 70.749537 38.033435 71.13129 37.642578 71.501953 L 36.970703 68.810547 A 1.0001 1.0001 0 0 0 35.9375 68.041016 A 1.0001 1.0001 0 0 0 35.029297 69.296875 L 35.96875 73.052734 C 35.737156 73.261968 35.507367 73.467929 35.28125 73.667969 L 34.341797 70.748047 A 1.0001 1.0001 0 0 0 33.359375 70.041016 A 1.0001 1.0001 0 0 0 32.4375 71.361328 L 33.638672 75.087891 C 31.624968 76.780155 29.782059 78.183653 27.974609 79.511719 L 27.111328 78.847656 L 28.554688 77.886719 A 1.0001 1.0001 0 0 0 27.980469 76.046875 A 1.0001 1.0001 0 0 0 27.445312 76.222656 L 25.4375 77.560547 L 24.566406 76.890625 L 26.447266 75.949219 A 1.0001 1.0001 0 0 0 26.003906 74.046875 A 1.0001 1.0001 0 0 0 25.552734 74.160156 L 22.804688 75.535156 L 22.3125 75.15625 L 23.707031 73.761719 A 1.0001 1.0001 0 0 0 22.980469 72.044922 A 1.0001 1.0001 0 0 0 22.292969 72.347656 L 20.714844 73.925781 L 18.173828 71.972656 L 39.671875 53.574219 A 2.0002 2.0002 0 0 0 39.599609 50.476562 C 38.478708 49.603297 37.316155 48.620715 36.121094 47.552734 L 38.242188 47.023438 A 1.0001 1.0001 0 0 0 38.025391 45.050781 A 1.0001 1.0001 0 0 0 37.757812 45.083984 L 34.371094 45.931641 C 33.178221 44.791892 31.95193 43.560815 30.65625 42.152344 L 32.554688 40.886719 A 1.0001 1.0001 0 0 0 31.980469 39.046875 A 1.0001 1.0001 0 0 0 31.445312 39.222656 L 29.316406 40.642578 C 28.838647 40.101678 28.361031 39.565294 27.867188 38.982422 L 30.925781 36.876953 A 1.0001 1.0001 0 0 0 30.322266 35.046875 A 1.0001 1.0001 0 0 0 29.791016 35.230469 L 26.591797 37.433594 C 26.018456 36.733769 25.436158 36.013632 24.839844 35.253906 L 27.447266 33.949219 A 1.0001 1.0001 0 0 0 27.003906 32.046875 A 1.0001 1.0001 0 0 0 26.552734 32.160156 L 23.59375 33.638672 C 22.33619 31.991071 21.045779 30.257715 19.677734 28.322266 L 27.951172 20.800781 z M 46.480469 45.066406 C 45.625469 45.104406 44.963953 45.828641 45.001953 46.681641 C 45.038953 47.534641 45.762234 48.198156 46.615234 48.160156 C 47.468234 48.122156 48.133703 47.399875 48.095703 46.546875 C 48.057703 45.693875 47.333469 45.028406 46.480469 45.066406 z M 52.673828 48.164062 C 51.820828 48.202062 51.157312 48.924344 51.195312 49.777344 C 51.233312 50.630344 51.955594 51.295813 52.808594 51.257812 C 53.661594 51.219813 54.324109 50.495578 54.287109 49.642578 C 54.249109 48.789578 53.526828 48.126062 52.673828 48.164062 z M 49.578125 53.960938 C 48.725125 53.998937 48.061609 54.721219 48.099609 55.574219 C 48.136609 56.427219 48.858891 57.089734 49.712891 57.052734 C 50.565891 57.014734 51.229406 56.292453 51.191406 55.439453 C 51.153406 54.586453 50.431125 53.922937 49.578125 53.960938 z"></path>
</svg>
    </div>
  );

export default NavBar;
