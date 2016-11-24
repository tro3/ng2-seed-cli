import { Component } from '@angular/core'
import { EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ng2-modal',
  templateUrl: './modal.component.pug',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  show: boolean = false
  @Input() title: string = 'None found'
  @Input() cancel: boolean = false
  @Output() ok: EventEmitter<void> = new EventEmitter<void>()

  open() {
    this.show = true
  }

  _cancel() {
    this.show = false
  }

  _ok() {
    this.show = false
    this.ok.emit()
  }

}
