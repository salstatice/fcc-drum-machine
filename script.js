/*source from FCC demo for project Drum Machine
    
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'

    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'

    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'

    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'

    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
 
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'

    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'

    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
*/

const padList = [
{
  keyTrigger: "Q",
  keyCode: 81,
  padName: "Heater 1",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{
  keyTrigger: "W",
  keyCode: 87,
  padName: "Heater 2",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{
  keyTrigger: "E",
  keyCode: 69,
  padName: "Heater 3",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{
  keyTrigger: "A",
  keyCode: 65,
  padName: "Heater 4",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{
  keyTrigger: "S",
  keyCode: 83,
  padName: "Clap",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{
  keyTrigger: "D",
  keyCode: 68,
  padName: "Open-HH",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{
  keyTrigger: "Z",
  keyCode: 90,
  padName: "Kick n' Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{
  keyTrigger: "X",
  keyCode: 88,
  padName: "Kick",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{
  keyTrigger: "C",
  keyCode: 67,
  padName: "Closed-HH",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


const ListPair = {}; //Set up an Object with keyTrigger as property and padName as the value

const creatListPair = padList.map(item => {
  ListPair[item.keyTrigger] = item.padName;
});

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: "",
      displayMessage: "Welcome" };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    let key = String.fromCharCode(e.keyCode);
    if (ListPair.hasOwnProperty(key)) {
      this.setState({
        keyPressed: key,
        displayMessage: ListPair[key] });

      this.playSound(key);
    }
  }

  handleClick(e) {
    this.setState({
      keyPressed: e.target.value,
      displayMessage: ListPair[e.target.value] });

    this.playSound(e.target.value);
  }

  playSound(key) {
    let sound = document.getElementById(key);
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.play();
  }

  render() {
    const pads = padList.map(x => {
      return /*#__PURE__*/(
        React.createElement("button", { className: "drum-pad", id: x.padName, value: x.keyTrigger, onClick: this.handleClick }, /*#__PURE__*/
        React.createElement("audio", { className: "clip", id: x.keyTrigger, src: x.url }),
        x.keyTrigger));

    });

    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h1", null, /*#__PURE__*/React.createElement("i", { className: "fas fa-drum" }), "Drum Machine", /*#__PURE__*/React.createElement("i", { class: "fas fa-drum" })), /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("h2", null, this.state.displayMessage)), /*#__PURE__*/

      React.createElement("div", { id: "pads-wrapper" },
      pads)));



  }}
;



ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById('app'));