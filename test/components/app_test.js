import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together tests
describe('App', () => {
    // Use 'it' to test a single attribute of a target
    it('shows the correct text', () => {
        // Create instance of App
        const component = renderComponent(App);
        // Use 'expect' to make an 'assertion'
        expect(component).to.contain('React simple starter');
    });
});
