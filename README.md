# petaPanas-small
JavaScript heatmap chart maker using html tables. Colors are blended by finding the weighted average of two cmyk values.

## Sample Output
![petaPanas demo](https://user-images.githubusercontent.com/57507660/124622571-6deab300-dea5-11eb-8675-7f3dc2980c69.png)


## Quickstart
1. Use the following CDNs
```
<link rel="stylesheet href='...'>
<script src='...'></script>
```
2. Create a new div to contain the chart and a petaPanas object
```
<div id='yourDivId'></div>
```
```
<script>

const yourObjectName = {
  ppDiv : 'yourDivId',
  ppData : dataObjectName
};
petaPanas.dchart(yourObjectName);

</script>
```

## Data Format
This object should be declared before the petaPanas object
```
dataObjectName = {
  labels : {
    x : [value,value,value], //horizontal labels
    y : [value,value,value] //vertical labels
  },
  values : {
    [
      [x1y1,x2y1,x3y1],
      [x1y2,x2y2,x3y2],
      [x1y3,x2y3,x3y3]
    ]
  }
}
```
## To Do
- [x] Tooltip for values
- [ ] Chart title and axes labels
- [ ] Hexadecimal color codes, (currently inputs only accept `cmyk(c%, m%, y%, k%)` format
