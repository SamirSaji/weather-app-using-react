import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import "../App.css";
// import Weather from "./weather";
const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: `theme.spacing.unit * y`,
    marginRight: `theme.spacing.unit * y`,
    width: "100%",
  },

  cssLabel: {
    color: "#00000 !important",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#102D46 !important",
    },
  },

  cssFocused: {
    color: "#000 !important",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#102D46 !important",
  },
});

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
    // this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        if (this.props.onLocation) {
          this.props.onLocation(latLng);
        }
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    const { classes } = this.props;
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric",
              }}
              {...getInputProps({
                placeholder: "Search Places...",
                className: "location-search-input",
              })}
              id="outlined-basic"
              label="Search Location"
              variant="outlined"
              size="small"
              autoFocus
              style={{ width: "100%" }}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "tansparent",
                      cursor: "pointer",
                      // opacity: "0.5",
                    }
                  : {
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      opacity: "0.7",
                    };
                return (
                  <div
                   
                    className="dropdown_class"
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span  >{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
LocationSearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationSearchInput);
