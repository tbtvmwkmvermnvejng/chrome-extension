add();

function add() {
  let headerInfo = document.getElementsByClassName('stories_feed_wrap');
  let linkButton = document.createElement('a');
  linkButton.href = 'https://vk.com/';
  linkButton.innerHTML = 'test';

  for (let i = 0; i < headerInfo.length; i++) {
    headerInfo.innerHTML = '124';
    headerInfo[i].appendChild(linkButton);
  }
}
