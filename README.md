#Modal

A simple JavaScript class for creating modal dialogs.

##Usage

###Creating a Success Modal

```javascript
const successModal = Modal.success("This is a success message");
successModal.close(); // Close the modal
````

###Creating a Warning Modal

```javascript
const warningModal = Modal.warning("This is a warning message");
warningModal.close(); // Close the modal
```

###Creating a Danger Modal

```javascript
const dangerModal = Modal.danger("This is a danger message");
dangerModal.close(); // Close the modal
```

###Creating a Light Modal

```javascript
const lightModal = Modal.light("This is a light message");
lightModal.close(); // Close the modal
```

###Creating a Dark Modal

```javascript
const darkModal = Modal.dark("This is a dark message");
darkModal.close(); // Close the modal
```

###Creating a Loading Modal

```javascript
const loadingModal = Modal.loading("Loading...", ModalSpinner.SPINNER);
// Do some asynchronous operation
// loadingModal.close(); // Close the modal when the operation is done
```

##API


###Modal Options

- **type**: Type of the modal (ModalType.DANGER, ModalType.WARNING, ModalType.SUCCESS, ModalType.DARK, ModalType.LIGHT)
- **class**: Additional CSS class for the modal
- **title**: Title of the modal
- **message**: Content/message of the modal
- **closable**: Boolean, whether the modal is closable or not
- **spinner**: Type of spinner for loading modals (ModalSpinner.SPINNER, ModalSpinner.CIRCLE, etc.)

###Methods

- **close()**: Closes the modal

###Modal Types

- ModalType.DANGER
- ModalType.WARNING
- ModalType.SUCCESS
- ModalType.DARK
- ModalType.LIGHT

###Spinner Types

- ModalSpinner.CIRCLE
- ModalSpinner.GEAR
- ModalSpinner.GEARS
- ModalSpinner.HOURGLASS
- ModalSpinner.IPHONE_1
- ModalSpinner.IPHONE_2
- ModalSpinner.SEARCH
- ModalSpinner.SPINNER