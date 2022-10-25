export class AppConstants {
    // local onde está a api
    public static get baseServer(): string{
        return "https://aesculapius-scheduling-center.herokuapp.com"
    }

    // montando o endereço básico para o logi
    public static get baseLoginPatient(): string{
        return this.baseServer + "/patients/login"
    }

    public static get baseLoginMedical(): string{
      return this.baseServer + "/medicals/login"
  }

    public static get medicals(): any{
      return this.baseServer + "/medicals"
    }

    //
    public static get baseAdmin():string{
        return this.baseServer + "/admins/login"
    }

    public static get baseAppointments():string{
      return this.baseServer + "/scheduling"
    }
}
