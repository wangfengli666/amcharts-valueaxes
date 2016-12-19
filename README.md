## Installation

```
npm install -g yarn
yarn
```

## Start
```
yarn start
```

Click on Ordinate button, it outputs in console (Chrome 55) :
```
2016-12-19 16:44:27.682 amcharts.js:164 Uncaught TypeError: Cannot read property 'graphs' of undefined
    at Object.createSerialGraph (amcharts.js:164)
    at Object.createGraph (amcharts.js:151)
    at Object.draw (amcharts.js:150)
    at Object.zoom (amcharts.js:207)
    at b.zoomAxesAndGraphs (serial.js:21)
    at b.zoomAxesAndGraphs (serial.js:38)
    at b.indexZoom (serial.js:37)
    at b.zoom (serial.js:34)
    at b.drawChart (serial.js:31)
    at b.onDataUpdated (serial.js:25)
createSerialGraph @ amcharts.js:164
createGraph @ amcharts.js:151
draw @ amcharts.js:150
zoom @ amcharts.js:207
zoomAxesAndGraphs @ serial.js:21
zoomAxesAndGraphs @ serial.js:38
indexZoom @ serial.js:37
zoom @ serial.js:34
drawChart @ serial.js:31
onDataUpdated @ serial.js:25
initChart @ serial.js:25
measureMargins @ serial.js:7
onDataUpdated @ serial.js:26
parsePartSerialData @ amcharts.js:292
parseSerialData @ amcharts.js:288
parseData @ serial.js:43
initChart @ serial.js:25
afterWrite @ amcharts.js:112
write @ amcharts.js:108
validateNow @ amcharts.js:134
componentDidUpdate @ amcharts3-react.js:196
measureLifeCyclePerf @ ReactCompositeComponent.js:75
(anonymous) @ ReactCompositeComponent.js:729
notifyAll @ CallbackQueue.js:76
close @ ReactReconcileTransaction.js:80
closeAll @ Transaction.js:206
perform @ Transaction.js:153
perform @ Transaction.js:140
perform @ ReactUpdates.js:89
flushBatchedUpdates @ ReactUpdates.js:172
closeAll @ Transaction.js:206
perform @ Transaction.js:153
batchedUpdates @ ReactDefaultBatchingStrategy.js:62
batchedUpdates @ ReactUpdates.js:97
dispatchEvent @ ReactEventListener.js:147
```
