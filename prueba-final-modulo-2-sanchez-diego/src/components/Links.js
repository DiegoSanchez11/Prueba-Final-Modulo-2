import React from "react";
import { Typography, Link } from "@material-ui/core";

class Links extends React.Component {
  render() {
    return (
      <div>
        <Typography>
          <Link
            className="link__primary"
            href={this.props.href}
            onClick={this.props.onClick}
            color={this.props.color}
          >
            {this.props.content}
          </Link>
        </Typography>
      </div>
    );
  }
}

export default Links;
