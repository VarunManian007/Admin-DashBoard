import { Validator,AbstractControl, NG_VALIDATORS, } from "@angular/forms";
import { Directive } from "@angular/core";
import { Key } from "protractor";

@Directive({
    selector:'[appSelectfile ]',
    providers: [{
        provide:NG_VALIDATORS,
        useExisting:SelectfileDirective ,
        multi: true,
    }]
})
export class SelectfileDirective implements Validator{
    validate(control: AbstractControl): {[Key: string]: any} | null{
        return control.value ==='-1' ? {'defaultSelected': true} : null;
    }
}
