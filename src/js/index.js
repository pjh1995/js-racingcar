console.log(ERROR_MSG);
const $wrapCarsName = document.getElementById('wrap-cars-name');
const $inputCarsName = $wrapCarsName.querySelector('input');
const $buttonCarsName = $wrapCarsName.querySelector('button');

const $wrapTryTimes = document.getElementById('wrap-try-times');
const $inputTryTimes = $wrapTryTimes.querySelector('input');
const $buttonTryTimes = $wrapTryTimes.querySelector('button');

const $racingBoardSection = document.getElementById('racing-board-section');
const $racingBoard = document.getElementById('racing-board');

$buttonCarsName.addEventListener('click', (e) => {
  const carsName = $inputCarsName.value;
  isValid = checkNames(carsName);
  if (!isValid) {
    return errorAlert('INVALID_NAME');
  }

  const carObjects = carsName
    .trim()
    .split(',')
    .map((name) => {
      const wrapCarPlayer = document.createElement('div');
      wrapCarPlayer.className = 'mr-2';
      const html = `
        <div class="car-player">${name}</div>
        <div class="d-flex justify-center mt-3">
          <div class="relative spinner-container">
            <span class="material spinner"></span>
          </div>
        </div>
      `;
      wrapCarPlayer.innerHTML = html;
      $racingBoard.appendChild(wrapCarPlayer);
      return new Car(name);
    });

  console.log(carObjects);

  $wrapTryTimes.classList.remove('d-none');
});

$buttonTryTimes.addEventListener('click', (e) => {
  const tryTimes = $inputTryTimes.value;
  isValid = checkTimes(tryTimes);
  if (!isValid) {
    return errorAlert('INVALID_TIMES');
  }

  $racingBoardSection.classList.remove('d-none');
});

// function toggleFlex($target) {
//   const isHide = $target.classList.toggle('d-none');
//   $target.classList[isHide ? 'add' : 'remove']('d-flex');
//   $target.classList[isHide ? 'remove' : 'remove']('d-none');
// }
