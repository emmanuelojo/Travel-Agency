import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';

import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ContextMenu from 'primevue/contextmenu';

import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
// import FullCalendar from 'primevue/fullcalendar';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';

import ProgressSpinner from 'primevue/progressspinner';
import Password from 'primevue/password';

import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';

import Sidebar from 'primevue/sidebar';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import Toast from 'primevue/toast';
import ToggleButton from 'primevue/togglebutton';
import Toolbar from 'primevue/toolbar';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'  
import 'primeicons/primeicons.css' // icons
// import 'primeflex/primeflex.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(store)
app.use(router)


app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Avatar', Avatar);
app.component('Badge', Badge);
app.component('BlockUI', BlockUI);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker)
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('DeferredContent', DeferredContent);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dropdown', Dropdown);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);
// app.component('FullCalendar', FullCalendar);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);

app.component('ProgressSpinner', ProgressSpinner);
app.component('Password', Password);

app.component('Message', Message);
app.component('MultiSelect', MultiSelect);

app.component('Sidebar', Sidebar);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('TabPanel', TabPanel);
app.component('TabView', TabView);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('Timeline', Timeline);
app.component('Tree', Tree);
app.component('TreeTable', TreeTable)
app.component('Toast', Toast);
app.component('ToggleButton', ToggleButton);
app.component('Toolbar', Toolbar);

const vm = app.mount('#app')

export default vm;

// createApp(App).use(store).use(router).mount('#app')
