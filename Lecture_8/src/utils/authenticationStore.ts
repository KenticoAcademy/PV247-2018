interface AuthenticationStore {
  readonly isAuthenticated: boolean;
  readonly fullName: string;
  readonly email: string;
  readonly address: string;
  readonly authenticate: () => void;
  readonly anonymize: (loadNewRandom?: boolean) => void;
}

const randomApiUrl = 'https://api.randomuser.me/?nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,ir,no,nl,nz,tr,us&inc=nat,name,email,location';

const defaultAuthenticationDetails = {
  fullName: 'Guy Fawkes',
  email: 'vendetta@anonymous.gov',
  address: 'Shooters Hill 5, London (south-east)',
};

const authenticationDetails = {...defaultAuthenticationDetails};

const secure = (value: string, isAuthorized: boolean): string => isAuthorized ? value : '';

const parseDetails = (data: any) => {
  const result = data.results[0];

  return {
    fullName: `${result.name.first} ${result.name.last}`,
    address: result.location.street,
    email: result.email.replace('@example.com', `@${result.name.title.toLowerCase()}.${result.nat.toLowerCase()}.gov`),
  };
};

const loadRandomDetails = () => {
  if (!fetch) {
    return;
  }

  fetch(randomApiUrl)
    .then(response => response.json())
    .then(data => {
      const parsedDetails = parseDetails(data);

      authenticationDetails.fullName = parsedDetails.fullName;
      authenticationDetails.address = parsedDetails.address;
      authenticationDetails.email = parsedDetails.email;
    });
};


export const authenticationStore: AuthenticationStore = {
  isAuthenticated: false,

  get fullName() {
    return secure(authenticationDetails.fullName, this.isAuthenticated);
  },
  get email() {
    return secure(authenticationDetails.email, this.isAuthenticated);
  },
  get address() {
    return secure(authenticationDetails.address, this.isAuthenticated);
  },

  authenticate() {
    this.isAuthenticated = true;
  },

  anonymize(loadNewRandom: boolean = true) {
    this.isAuthenticated = false;

    if (loadNewRandom) {
      loadRandomDetails();
    }
  },
};
