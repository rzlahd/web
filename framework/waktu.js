// rzlahd plugins
function join(date, options, separator) {
   function format(option) {
      let formatter = new Intl.DateTimeFormat('en', option);
      return formatter.format(date);
   }
   return options.map(format).join(separator);
}

let options = [{day: 'numeric'}, {month: 'long'}, {year: 'numeric'}];
let selanjutnya = join(nextWeek, options, '-');
