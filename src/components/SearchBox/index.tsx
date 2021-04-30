import { ReactElement, useRef } from "react";
import { makeStyles, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

type SearchBoxProps = {
  onChange: (text: string) => void;
};
const defaultProps = {
  onChange: () => {},
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBox = ({ onChange }: SearchBoxProps): ReactElement => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    if (!!inputRef.current) {
      onChange(inputRef.current.value);
      // inputRef.current.value = "";
    }
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search for a movie"
        inputRef={inputRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleChange();
          }
        }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        onClick={handleChange}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

SearchBox.defaultProps = defaultProps;

export default SearchBox;