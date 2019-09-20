'use strict';

var CLOUD = {
  width: 420,
  height: 270,
  x: 100,
  y: 10,
};
var GAP = 10;
var FONT_GAP_X = 20;
var FONT_LINE_HEIGHT = 20;
var TEXT_GAP = 40;
var BAR = {
  width: 40,
  height: 150,
  gapX: 50,
  gapY: 30,
};
var textNameGap = CLOUD.height - GAP;

var alfa = function () {
  var min = 1;
  var max = 9;
  var rand = Math.floor(Math.random() * (max - min)) + min;
  rand = Math.round(rand) / 10;
  return rand;
};

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.globalAlpha = 1;
  ctx.fillRect(CLOUD.x + GAP * 1.5, CLOUD.y + GAP, CLOUD.width, CLOUD.height);
  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD.x, CLOUD.y, CLOUD.width, CLOUD.height);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD.x + GAP + FONT_GAP_X, CLOUD.y + FONT_LINE_HEIGHT + GAP);
  ctx.fillText('Список результатов:', CLOUD.x + GAP + FONT_GAP_X, CLOUD.y + GAP + FONT_LINE_HEIGHT * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, textNameGap);
    ctx.fillText(Math.round(times[i]), CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, CLOUD.height -
    Math.round(BAR.height * times[i] / maxTime) - BAR.gapY - GAP);
    ctx.fillRect(CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, CLOUD.height - Math.round(BAR.height * times[i] / maxTime)
    - BAR.gapY, BAR.width, Math.round(BAR.height * times[i] / maxTime));

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.globalAlpha = 1;
      ctx.fillText(names[i], CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, textNameGap);
      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.globalAlpha = 1;
      ctx.fillRect(CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, CLOUD.height -
      Math.round(BAR.height * times[i] / maxTime) - BAR.gapY, BAR.width, Math.round(BAR.height * times[i] / maxTime));
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.globalAlpha = 1;
      ctx.fillText(Math.round(times[i]), CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, CLOUD.height -
      Math.round(BAR.height * times[i] / maxTime) - BAR.gapY - GAP);
    } else {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.globalAlpha = 1;
      ctx.fillText(names[i], CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, textNameGap);
      ctx.fillStyle = 'rgb(19, 16, 115)';
      ctx.globalAlpha = alfa();
      ctx.fillRect(CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, CLOUD.height -
      Math.round(BAR.height * times[i] / maxTime) - BAR.gapY, BAR.width, Math.round(BAR.height * times[i] / maxTime));
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.globalAlpha = 1;
      ctx.fillText(Math.round(times[i]), CLOUD.x + TEXT_GAP + (BAR.gapX + TEXT_GAP) * i, CLOUD.height -
      Math.round(BAR.height * times[i] / maxTime) - BAR.gapY - GAP);
    }
  }
};
