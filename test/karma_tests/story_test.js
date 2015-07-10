var React = require('react/addons');
var Story = require('../../app/js/components/story.jsx');
var TestUtils = React.addons.TestUtils;
var testUtilsAdditions = require('react-testutils-additions');

  describe('Story component', function () {
    var component;

    afterEach(function () {
      // if (component && testUtilsAdditions.isCompositeComponent(component) && component.isMounted()) {
      //   React.unmountComponentAtNode(component.getDOMNode().parent);
      // }
    });

    beforeEach(function () {
      component = TestUtils.renderIntoDocument(React.createElement('story'));
      component.props.storyTitle = 'front end test title';
      component.props.storyTitle = 'front end test title';
      component.props.author = 'front end author';
      component.props.storyText = 'front end story text';
      console.log('KKKKKKKKKKKK', component.props);
    });

    it('should display a story', function () {
      expect(component.props).toBeDefined();
      expect(component.props.storyTitle).toBeDefined();
      expect(component.props.storyTitle).toBe('front end test title');
    });

  });
