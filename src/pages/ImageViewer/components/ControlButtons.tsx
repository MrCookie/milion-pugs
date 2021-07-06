import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './ControlButtons.scss';

type ControlButtonsProps = {
  handleNextButtonClicked: () => void;
  handleSaveButtonClicked: () => void;
};

export const ControlButtons = ({
  handleNextButtonClicked,
  handleSaveButtonClicked,
}: ControlButtonsProps) => {
  return (
    <div>
      <Button
        onClick={handleNextButtonClicked}
        className="button"
        variant="contained"
        id="nextBtn"
      >
        Następne
      </Button>
      <Button
        onClick={handleSaveButtonClicked}
        className="button"
        variant="contained"
      >
        Zapisz
      </Button>
      <Button
        className="button link"
        component={Link}
        to="/zapisane"
        variant="outlined"
      >
        Zapisane
      </Button>
    </div>
  );
};
