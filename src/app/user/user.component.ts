import { Component, EventEmitter, Input, Output} from "@angular/core";
import { type User } from "./user.model";
import { CardComponent } from "../shared/card.component";

@Component({
    selector: "app-user",
    standalone: true,
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css",
    imports: [CardComponent],
}) 
export class UserComponent {
    @Input({required:true}) user!: User;
    @Input({required:true}) selected!: boolean;
    @Output() select = new EventEmitter();
    // l'altra alternativa:
    //select = output<string>();

    get imagePath() {
        return "assets/users/" + this.user.avatar;
    }

    onSelectUser() {
        this.select.emit(this.user.id);
    }

    // avatar e name grazie al decorator "input" sono ora dei segnali.
    // required è utilizzato perchè è obbligatorio che venga colmata questa variabile
    
    //avatar = input.required<string>();
    //name = input.required<string>();

    // angular ricalcolerà il valore di imagePath solo ogni volta
    // che il valore dell'avatar verrà modificato, ovviamente 
    // procedimento piu efficiente di quello di usare un semplice metodo get
    
    //imagePath = computed(() => {
    //    return "assets/users/" + this.avatar();
    //});
}