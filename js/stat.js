'use strict';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10,
};
var GAP = 10;
var FONT_GAP_X = 20;
var FONT_LINE_HEIGHT = 20;
var TEXT_GAP = 40;
var Bar = {
  WIDTH: 40,
  HEIGHT: 150,
  GAPX: 50,
  GAPY: 30,
};
var textNameGap = Cloud.HEIGHT - GAP;
var alfa = function () {
  rand = Math.random();
  return rand
};
var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(Cloud.X + GAP, Cloud.Y + GAP, Cloud.WIDTH, Cloud.HEIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', Cloud.X + GAP + FONT_GAP_X, Cloud.Y + FONT_LINE_HEIGHT + GAP);
  ctx.fillText('Список результатов:', Cloud.X + GAP + FONT_GAP_X, Cloud.Y + GAP + FONT_LINE_HEIGHT * 2);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, textNameGap);
    ctx.fillText(Math.round(times[i]), Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, Cloud.HEIGHT -
      Math.round(Bar.HEIGHT * times[i] / maxTime) - Bar.GAPY - GAP);
    ctx.fillRect(Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, Cloud.HEIGHT - Math.round(Bar.HEIGHT * times[i] / maxTime)
      - Bar.gapY, Bar.width, Math.round(Bar.HEIGHT * times[i] / maxTime));
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillText(names[i], Cloud.X + TEXT_GAP + (Bar.gapX + TEXT_GAP) * i, textNameGap);      
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, Cloud.HEIGHT -
        Math.round(Bar.HEIGHT * times[i] / maxTime) - Bar.GAPY, Bar.WIDTH, Math.round(Bar.HEIGHT * times[i] / maxTime));      
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillText(Math.round(times[i]), Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, Cloud.HEIGHT -
        Math.round(Bar.HEIGHT * times[i] / maxTime) - Bar.GAPY - GAP);
    } else {
      var MAX_RANDOM = 9;
      var MIN_RANDOM = 3;
      var alfa = function () {
        var rand = Math.floor(MIN_RANDOM + Math.random() * (MAX_RANDOM + 1 - MIN_RANDOM));
        return rand / 10
      };
      ctx.fillStyle = 'rgba(0, 0, 255, '+ alfa() +')';
      ctx.fillText(names[i], Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, textNameGap);
      ctx.fillStyle = 'rgba(0, 0, 0, 255, '+ alfa() +')';
      ctx.fillRect(Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, Cloud.HEIGHT -
      Math.round(Bar.HEIGHT * times[i] / maxTime) - Bar.GAPY, Bar.WIDTH, Math.round(Bar.HEIGHT * times[i] / maxTime));
      ctx.fillStyle = 'rgba(0, 0, 255, '+ alfa() +')';
      ctx.fillText(Math.round(times[i]), Cloud.X + TEXT_GAP + (Bar.GAPX + TEXT_GAP) * i, Cloud.HEIGHT -
      Math.round(Bar.HEIGHT * times[i] / maxTime) - Bar.GAPY - GAP);
    }
  }
};