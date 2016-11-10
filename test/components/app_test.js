import { renderComponent, expect } from '../test_helper';
import UserList from '../../src/components/user_list';

// Use describe to group together tests
xdescribe('UserList', () => {
    // Use 'it' to test a single attribute of a target
    it('shows the correct text', () => {
        // Create instance of App
        const component = renderComponent(UserList);
        // Use 'expect' to make an 'assertion'
        expect(component).to.contain('User List');
    });
});
