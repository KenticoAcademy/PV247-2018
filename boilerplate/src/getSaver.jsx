import * as React from 'react';

export function getSaver(Component) {
    class Saver extends React.PureComponent {

        constructor(props) {
            super(props);
            this.state = {
                savingStatus: 'none',
            }
        }

        save = (newValue) => {
            this.setState({
                savingStatus: 'saving',
            });
            setTimeout(() => {
                this.setState({
                    savingStatus: 'saved',
                });
            }, 600);
        };

        render() {
            return (
                <Component {...this.props} save={this.save} savingStatus={this.state.savingStatus}/>
            );
        }
    }

    return Saver;
}