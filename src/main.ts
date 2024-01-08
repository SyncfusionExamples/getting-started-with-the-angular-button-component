import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2UVhhQlVHfV5dXGNWfFN0QXNYfVRzdl9CY0wgOX1dQl9nSX9TdEVrWn1aeXxSRWY=');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
