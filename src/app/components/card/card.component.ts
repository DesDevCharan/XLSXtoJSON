import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output()
  emitJSON = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  handleFile(e) {
    e.stopPropagation();
    e.preventDefault();
    let i, f, files;
    if (e.type === 'drop') {
      files = e.dataTransfer.files;
    } else if (e.type === 'change') {
      files = e.target.files;
    }

    for (i = 0, f = files[i]; i !== files.length; ++i) {
      const reader = new FileReader();
      const name = f.name;
      reader.onload = (eve) => {
        const data = eve.target['result'];
        const workbook = XLSX.read(data, { type: 'binary' });
        /* DO SOMETHING WITH workbook HERE */
        // var sheet_name_list = workbook.SheetNames;
        /* Get worksheet */
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const wsJSON = XLSX.utils.sheet_to_json(worksheet);
        this.emitJSON.emit(wsJSON);
      };
      reader.readAsBinaryString(f);
    }
  }
}
