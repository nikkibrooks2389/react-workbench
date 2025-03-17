import Counter from "../challenges/ui/Counter";
import Accordion from "../challenges/ui/Accordion";
import ContactForm from "../challenges/ui/ContactForm";
import FlightBooker from "../challenges/ui/FlightBooker";
import GenerateTable from "../challenges/ui/GenerateTable";
import HolyGrail from "../challenges/ui/HolyGrail";
import ProgressBar from "../challenges/ui/ProgressBar";
import ProgressBars from "../challenges/ui/ProgressBars";
import TemperatureConverter from "../challenges/ui/TemperatureConverter";
import MortgageCalculator from "../challenges/ui/MortgageCalculator";
import Tweet from "../challenges/ui/Tweet";
import Tabs from "../challenges/ui/Tabs";
import AnalogClock from "../challenges/ui/AnalogClock";
import DataTable from "../challenges/ui/DataTable";
import DiceRoller from "../challenges/ui/DiceRoller";
import FileExplorer from "../challenges/ui/FileExplorer";
import GridLights from "../challenges/ui/GridLights";
import LikeButton from "../challenges/ui/LikeButton";
import ModalDialog from "../challenges/ui/ModalDialog";
import StarRating from "../challenges/ui/StarRating";
import TodoList from "../challenges/ui/TodoList";
import TrafficLight from "../challenges/ui/TrafficLight";
import DigitalClock from "../challenges/ui/DigitalClock";
import TicTacToe from "../challenges/ui/TicTacToe";
import ImageCarousel from "../challenges/ui/ImageCarousel";
import JobBoard from "../challenges/ui/JobBoard";
import Stopwatch from "../challenges/ui/Stopwatch";
import TransferList from "../challenges/ui/TransferList";

import UseStateChallenge from "../challenges/state-management/UseStateChallenge";
import UseReducerChallenge from "../challenges/state-management/UseReducerChallenge";
import ContextAPIChallenge from "../challenges/state-management/ContextAPIChallenge";

import FetchAPI from "../challenges/networking/FetchAPI";
import WebSockets from "../challenges/networking/WebSockets";

import AnimateBox from "../challenges/animation/AnimateBox";
import LoadingSpinner from "../challenges/animation/LoadingSpinner";

import Wordle from "../challenges/games/Wordle";
import Minesweeper from "../challenges/games/Minesweeper";
import SnakeGame from "../challenges/games/SnakeGame";
import SudokuSolver from "../challenges/games/SudokuSolver";

import UnitConverter from "../challenges/ultilities/UnitConverter";
import CurrencyConverter from "../challenges/ultilities/CurrencyConverter";
import StopwatchUtility from "../challenges/ultilities/StopwatchUtility";

export const uiChallenges = [
  { id: "counter", name: "Counter", component: Counter },
  { id: "accordion", name: "Accordion", component: Accordion },
  { id: "contact-form", name: "Contact Form", component: ContactForm },
  { id: "flight-booker", name: "Flight Booker", component: FlightBooker },
  { id: "generate-table", name: "Generate Table", component: GenerateTable },
  { id: "holy-grail", name: "Holy Grail Layout", component: HolyGrail },
  { id: "progress-bar", name: "Progress Bar", component: ProgressBar },
  { id: "progress-bars", name: "Multiple Progress Bars", component: ProgressBars },
  { id: "temperature-converter", name: "Temperature Converter", component: TemperatureConverter },
  { id: "mortgage-calculator", name: "Mortgage Calculator", component: MortgageCalculator },
  { id: "tweet", name: "Tweet UI", component: Tweet },
  { id: "tabs", name: "Tabs Component", component: Tabs },
  { id: "analog-clock", name: "Analog Clock", component: AnalogClock },
  { id: "data-table", name: "Data Table", component: DataTable },
  { id: "dice-roller", name: "Dice Roller", component: DiceRoller },
  { id: "file-explorer", name: "File Explorer", component: FileExplorer },
  { id: "grid-lights", name: "Grid Lights", component: GridLights },
  { id: "like-button", name: "Like Button", component: LikeButton },
  { id: "modal-dialog", name: "Modal Dialog", component: ModalDialog },
  { id: "star-rating", name: "Star Rating", component: StarRating },
  { id: "todo-list", name: "Todo List", component: TodoList },
  { id: "traffic-light", name: "Traffic Light", component: TrafficLight },
  { id: "digital-clock", name: "Digital Clock", component: DigitalClock },
  { id: "tic-tac-toe", name: "Tic-Tac-Toe", component: TicTacToe },
  { id: "image-carousel", name: "Image Carousel", component: ImageCarousel },
  { id: "job-board", name: "Job Board", component: JobBoard },
  { id: "stopwatch", name: "Stopwatch", component: Stopwatch },
  { id: "transfer-list", name: "Transfer List", component: TransferList },
];

export const stateManagementChallenges = [
  { id: "use-state", name: "UseState Challenge", component: UseStateChallenge },
  { id: "use-reducer", name: "UseReducer Challenge", component: UseReducerChallenge },
  { id: "context-api", name: "Context API Challenge", component: ContextAPIChallenge },
];

export const networkingChallenges = [
  { id: "fetch-api", name: "Fetch API Challenge", component: FetchAPI },
  { id: "web-sockets", name: "WebSockets Challenge", component: WebSockets },
];

export const animationChallenges = [
  { id: "animate-box", name: "Animate Box", component: AnimateBox },
  { id: "loading-spinner", name: "Loading Spinner", component: LoadingSpinner },
];

export const gamesChallenges = [
  { id: "wordle", name: "Wordle", component: Wordle },
  { id: "minesweeper", name: "Minesweeper", component: Minesweeper },
  { id: "snake-game", name: "Snake Game", component: SnakeGame },
  { id: "sudoku-solver", name: "Sudoku Solver", component: SudokuSolver },
];

export const utilitiesChallenges = [
  { id: "unit-converter", name: "Unit Converter", component: UnitConverter },
  { id: "currency-converter", name: "Currency Converter", component: CurrencyConverter },
  { id: "stopwatch-utility", name: "Stopwatch Utility", component: StopwatchUtility },
];

export const challengeData = {
  ui: uiChallenges,
  "state-management": stateManagementChallenges,
  networking: networkingChallenges,
  animation: animationChallenges,
  games: gamesChallenges,
  utilities: utilitiesChallenges,
};