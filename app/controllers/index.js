/* eslint-disable ember/no-observers */
/* eslint-disable no-console */
import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

  emailAddress: "",
  responseMessage: "",
  headerMessage: "Coming Soon",

  isValid: computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: computed.not('isValid'),
  
  actions: {
    saveInvitation() {
      alert(`Saving of ${this.get('emailAddress')} is in progress`);
      this.set('responseMessage', `Thank you!, We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('headerMessage', `Welcome ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      
    }
  }

})
